import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useFetchAlbums } from 'hooks/getAlbums';
import { useSelector } from 'react-redux';
import { albumsSelector } from 'store/selectors';
import AlbumList from 'components/AlbumList';
import SearchTrack from 'components/SearchTrack';
import { useNavigate } from 'react-router-dom';
import { routesPath } from 'config';

const Albums = () => {
  useFetchAlbums();
  const { albums, isLoading, error } = useSelector(albumsSelector);
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ padding: '5rem 0', width: '100%' }}
      >
        <Card sx={{ width: '97%', background: 'lightblue', margin: '0 auto' }}>
          {/** Albums list top */}
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
                Albums
              </Typography>
              <Button onClick={() => navigate(routesPath.createAlbum)}>
                Create album
              </Button>
            </Grid>
          </Box>
          {/**Seaach tracks input */}
          <SearchTrack type="albums" />
          {/** Loader */}
          {isLoading === 'pending' && (
            <Box sx={{ width: '100%', paddingTop: '0.5rem' }}>
              <LinearProgress />
            </Box>
          )}
          {isLoading === 'succeeded' && <AlbumList albums={albums} />}
          {isLoading === 'failed' && <h2>{error}</h2>}
        </Card>
      </Grid>
    </>
  );
};

export default Albums;
