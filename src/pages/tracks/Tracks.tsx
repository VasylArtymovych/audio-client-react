import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import TrackList from 'components/TrackList';
import { routesPath } from 'config';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchTracks, fetchTracksByName } from 'store/operations';
import { tracksSelector } from 'store';
import { sxBtn } from './Tracks.styled';

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
      <Grid container justifyContent="center" sx={{ padding: '5rem 0' }}>
        <Card sx={{ width: '80%', background: 'lightblue' }}>
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <Typography
                component="h3"
                sx={{ fontSize: '2rem', color: 'primary.dark' }}
              >
                Tracks list
              </Typography>
              <Button sx={sxBtn} onClick={() => navigate(routesPath.create)}>
                Download
              </Button>
            </Grid>
          </Box>
          <TextField
            fullWidth
            value={search}
            label="Search by track name"
            onChange={onSearch}
            sx={{ background: 'whitesmoke' }}
          />
          {isLoading === 'pending' && (
            <Box sx={{ width: '100%', paddingTop: '0.5rem' }}>
              <LinearProgress />
            </Box>
          )}
          {isLoading === 'succeeded' && <TrackList />}
          {isLoading === 'failed' && <h2>{error}</h2>}
        </Card>
      </Grid>
    </>
  );
};

export default TracksPage;
