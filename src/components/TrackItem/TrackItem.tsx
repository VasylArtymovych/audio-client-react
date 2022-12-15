import { FC } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { ITrack } from 'types/tracks';
import { StyledCard } from './TrackItem.styled';
import { useNavigate } from 'react-router-dom';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const navigate = useNavigate();
  return (
    <StyledCard onClick={() => navigate(`/tracks/${track.id}`)}>
      <IconButton onClick={(e) => e.stopPropagation()}>
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
      <IconButton
        style={{ marginLeft: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Delete />
      </IconButton>
    </StyledCard>
  );
};

export default TrackItem;
