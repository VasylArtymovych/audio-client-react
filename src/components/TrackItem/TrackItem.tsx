import React, { FC } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { ITrack } from 'types/tracks';
import { StyledCard } from './TrackItem.styled';
import { useNavigate } from 'react-router-dom';
import { setActiveTrack } from 'store/reducers';
import { useAppDispatch, useAppSelector, useTimeConvertor } from 'hooks';
import { deleteTrack } from 'store/operations';
import { playerSelector } from 'store/selectors';

interface TrackItemProps {
  track: ITrack;
}
const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { active, pause, duration, currentTime } =
    useAppSelector(playerSelector);
  const { convertSec } = useTimeConvertor();

  const onPlay = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(setActiveTrack(track));
  };

  const onDeleteTrack = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(deleteTrack(track._id));
  };

  return (
    <StyledCard onClick={() => navigate(`/tracks/${track._id}`)}>
      <IconButton onClick={onPlay}>
        {active?._id === track._id && !pause ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img
        src={`http://localhost:4000/${track.picture}`}
        alt="track logo"
        width={70}
        height={70}
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
      </Grid>
      {active?._id === track._id && (
        <div>
          {convertSec(currentTime).minutes}:{convertSec(currentTime).seconds} /{' '}
          {convertSec(duration).minutes}:{convertSec(duration).seconds}
        </div>
      )}
      <IconButton style={{ marginLeft: 'auto' }} onClick={onDeleteTrack}>
        <Delete />
      </IconButton>
    </StyledCard>
  );
};

export default TrackItem;
