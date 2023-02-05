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
import { Container, sxBtn } from './Tracks.styled';

const TracksPage: FC = () => {
  useFetchTracks();
  const navigate = useNavigate();
  const { tracks, error, isLoading } = useAppSelector(tracksSelector);

  return (
    <Container>
      <Grid container justifyContent="center" sx={{ padding: '5rem 0' }}>
        <Card sx={{ width: '80%', background: 'rgba(67, 40, 107, 0.8)' }}>
          {/** Traks list top */}
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <Typography
                component="h3"
                sx={{
                  fontSize: '2rem',
                  color: 'primary.dark',
                  fontFamily: 'fantasy',
                }}
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
          {isLoading === 'succeeded' && (
            <TrackList tracks={tracks} type={'tracks'} />
          )}
          {isLoading === 'failed' && <h2>{error}</h2>}
        </Card>
      </Grid>
    </Container>
  );
};

export default TracksPage; 
