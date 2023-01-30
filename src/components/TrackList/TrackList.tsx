import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { ITrack } from 'types/tracks';
import TrackItem from 'components/TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem track={track} key={track._id} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
