import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, IconButton, Tooltip } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { ITrack } from 'types/tracks';
import { StyledCard } from './TrackItem.styled';
import { useNavigate } from 'react-router-dom';
import { setActiveTrack } from 'store/reducers';
import { useAppDispatch, useAppSelector, useTimeConvertor } from 'hooks';
import { deleteTrack } from 'store/operations';
import { playerSelector } from 'store/selectors';
import { useModal } from 'hooks';
import Modal from 'components/Modal';
import AddToAlbumForm from 'components/AddToAlbumForm';

interface TrackItemProps {
  track: ITrack;
  type: string;
}
const TrackItem: FC<TrackItemProps> = ({ track, type }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { active, pause, duration, currentTime } =
    useAppSelector(playerSelector);
  const { convertSec } = useTimeConvertor();
  const { isOpen, openModal, closeModal } = useModal();

  const onPlay = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(setActiveTrack(track));
  };

  const onDeleteTrack = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch(deleteTrack(track._id));
  };

  const onAddTrackToAlbum = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    openModal();
  };

  return (
    <>
      <StyledCard
        onClick={() => {
          navigate(`/tracks/${track._id}`, { state: { from: location } });
        }}
      >
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
          <p>{track.name}</p>
          <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
        </Grid>
        {active?._id === track._id && (
          <div>
            {convertSec(currentTime).minutes}:{convertSec(currentTime).seconds}{' '}
            / {convertSec(duration).minutes}:{convertSec(duration).seconds}
          </div>
        )}
        {type === 'tracks' ? (
          <Box sx={{ marginLeft: 'auto' }}>
            <Tooltip title="Add to album" placement="top">
              <IconButton
                style={{ marginLeft: 'auto' }}
                onClick={onAddTrackToAlbum}
              >
                <LibraryAddIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="top">
              <IconButton
                style={{ marginLeft: 'auto' }}
                onClick={onDeleteTrack}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        ) : null}
      </StyledCard>
      <Modal
        isShown={isOpen}
        onCloseModal={closeModal}
        modalContent={
          <AddToAlbumForm
            text="Album name to add track"
            trackId={track._id}
            onCloseModal={closeModal}
          />
        }
        headerText={'Add track to:'}
      />
    </>
  );
};

export default TrackItem;
