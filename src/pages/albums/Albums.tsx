import {
  Box,
  Button,
  Card,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import AlbumList from 'components/AlbumList';
import SearchTrack from 'components/SearchTrack';
import { useFetchAlbums } from 'hooks/getAlbums';
import React from 'react';
import { useSelector } from 'react-redux';
import { albumsSelector } from 'store/selectors';

const Albums = () => {
  useFetchAlbums();
  const { isLoading, error } = useSelector(albumsSelector);

  return (
    <>
      <Grid container justifyContent="center" sx={{ padding: '5rem 0' }}>
        <Card sx={{ width: '97%', background: 'lightblue' }}>
          {/** Albums list top */}
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <Typography
                component="h3"
                sx={{ fontSize: '2rem', color: 'primary.dark' }}
              >
                Albums
              </Typography>
              <Button onClick={() => console.log('click create album')}>
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
          {isLoading === 'succeeded' && <AlbumList />}
          {isLoading === 'failed' && <h2>{error}</h2>}
        </Card>
      </Grid>
    </>
  );
};

export default Albums;
