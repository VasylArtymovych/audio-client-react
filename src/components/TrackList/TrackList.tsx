import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { ITrack } from 'types/tracks';
import TrackItem from 'components/TrackItem';

interface TrackListProps {
  tracks: ITrack[];
  type: string;
}

const TrackList: FC<TrackListProps> = ({ tracks = [], type }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem track={track} key={track._id} type={type} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
