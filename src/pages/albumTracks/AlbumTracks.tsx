import { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAlbumTracks } from 'store/operations';
import { Container, sxBtn } from './AlbumTracks.styled';
import { albumsSelector } from 'store/selectors';
import TrackList from 'components/TrackList';

const AlbumTracks = () => {
  const { albumId } = useParams();
  const dispatch = useAppDispatch();
  const { album, isLoading, error } = useAppSelector(albumsSelector);
  const navigate = useNavigate();

  useEffect(() => {
    albumId && dispatch(fetchAlbumTracks(albumId));
  }, [dispatch, albumId]);

  return (
    <Container>
      <Button sx={sxBtn} onClick={() => navigate('/albums')}>
        Back to albums
      </Button>
      <Grid container justifyContent="center" sx={{ padding: '1rem 0 5rem' }}>
        <Card sx={{ width: '80%', background: 'rgba(67, 40, 107, 0.8)' }}>
          {/** Traks list top */}
          <Box sx={{ padding: '1rem 1rem 0' }}>
            <Typography
              component="h3"
              sx={{
                fontSize: '2rem',
                color: 'primary.dark',
                fontFamily: 'fantasy',
              }}
            >
              {`${album?.name} tracks:`}
            </Typography>
          </Box>

          {/** Loader */}
          {isLoading === 'pending' && (
            <Box sx={{ width: '100%', paddingTop: '0.5rem' }}>
              <LinearProgress />
            </Box>
          )}
          {isLoading === 'succeeded' && album && (
            <TrackList tracks={album?.tracks} type="album" />
          )}
          {isLoading === 'failed' && <h2>{error}</h2>}
        </Card>
      </Grid>
    </Container>
  );
};

export default AlbumTracks;
