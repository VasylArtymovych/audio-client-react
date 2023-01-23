import { Box, Grid } from '@mui/material';
import TrackItem from 'components/TrackItem';
import { useAppSelector } from 'hooks';
import { FC } from 'react';
import { tracksSelector } from 'store/selectors';

const TrackList: FC = () => {
  const { tracks } = useAppSelector(tracksSelector);

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
