import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import TrackList from 'components/TrackList';
import SearchTrack from 'components/SearchTrack';
import { routesPath } from 'config';
import { useAppSelector, useFetchTracks } from 'hooks';
import { tracksSelector } from 'store/selectors';
import { sxBtn } from './Tracks.styled';

const TracksPage: FC = () => {
  useFetchTracks();
  const navigate = useNavigate();
  const { error, isLoading } = useAppSelector(tracksSelector);

  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: '5rem 0' }}>
        <Card sx={{ width: '80%', background: 'lightblue' }}>
          {/** Traks list top */}
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
          {/**Seaach tracks input */}
          <SearchTrack type="tracks" />
          {/** Loader */}
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
