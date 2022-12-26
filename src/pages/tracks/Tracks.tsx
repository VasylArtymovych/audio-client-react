import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import TrackList from 'components/TrackList';
import { routesPath } from 'config';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchTracks, fetchTracksByName } from 'store/operations';
import { tracksSelector } from 'store';

const TracksPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, isLoading } = useAppSelector(tracksSelector);
  const [search, setSearch] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(fetchTracksByName(e.target.value));
      }, 700)
    );
  };

  return (
    <>
      <Grid container justifyContent="center" sx={{ paddingTop: '5rem' }}>
        <Card style={{ width: '80%' }}>
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <h2>Tracks list</h2>
              <Button onClick={() => navigate(routesPath.create)}>
                Download
              </Button>
            </Grid>
          </Box>
          <TextField fullWidth value={search} onChange={onSearch} />
          {isLoading === 'pending' && <div>Is Loading...</div>}
          {isLoading === 'succeeded' && <TrackList />}
          {isLoading === 'failed' && <h2>{error}</h2>}
        </Card>
      </Grid>
    </>
  );
};

export default TracksPage;
