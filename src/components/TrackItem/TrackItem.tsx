import React, { FC } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { ITrack } from 'types/tracks';
import { StyledCard } from './TrackItem.styled';
import { useNavigate } from 'react-router-dom';
import { setActiveTrack } from 'store/reducers';
import { useAppDispatch } from 'hooks';
import { deleteTrack } from 'store/operations';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
        {active ? <Pause /> : <PlayArrow />}
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
      {active && <div>02:42 / 03:22</div>}
      <IconButton style={{ marginLeft: 'auto' }} onClick={onDeleteTrack}>
        <Delete />
      </IconButton>
    </StyledCard>
  );
};

export default TrackItem;
