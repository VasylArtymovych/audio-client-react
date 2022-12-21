import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Grid } from '@mui/material';
import TrackList from 'components/TrackList';
import { routesPath } from 'config';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchTracks } from 'store/operations';
import { tracksSelector } from 'store';

const Tracks: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { tracks, error, isLoading } = useAppSelector(tracksSelector);

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  return (
    <>
      <Grid container justifyContent="center" sx={{ paddingTop: '5rem' }}>
        {isLoading === 'pending' && <div>Is Loading...</div>}
        {isLoading === 'succeeded' && (
          <Card style={{ width: '80%' }}>
            <Box p={2}>
              <Grid container justifyContent="space-between">
                <h2>Tracks list</h2>
                <Button onClick={() => navigate(routesPath.create)}>
                  Download
                </Button>
              </Grid>
            </Box>
            <TrackList tracks={tracks} />
          </Card>
        )}
        {isLoading === 'failed' && <h2>{error}</h2>}
      </Grid>
    </>
  );
};

export default Tracks;
