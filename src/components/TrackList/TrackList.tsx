import { Box, Grid } from '@mui/material';
import TrackItem from 'components/TrackItem';
import { FC } from 'react';
import { ITrack } from 'types/tracks';

interface ITrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<ITrackListProps> = ({ tracks }) => {
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
