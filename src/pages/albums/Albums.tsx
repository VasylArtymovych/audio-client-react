import { Box, Button, Card, Grid, Typography } from '@mui/material';
import SearchTrack from 'components/SearchTrack';
import { useFetchAlbums } from 'hooks/getAlbums';
import React from 'react';

const Albums = () => {
  useFetchAlbums();
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
                Albumes
              </Typography>
              <Button onClick={() => console.log('click create album')}>
                Create album
              </Button>
            </Grid>
          </Box>
          {/**Seaach tracks input */}
          <SearchTrack type="albums" />
          {/** Loader */}
          {/* {isLoading === 'pending' && (
            <Box sx={{ width: '100%', paddingTop: '0.5rem' }}>
              <LinearProgress />
            </Box>
          )}
          {isLoading === 'succeeded' && <TrackList />}
          {isLoading === 'failed' && <h2>{error}</h2>} */}
        </Card>
      </Grid>
    </>
  );
};

export default Albums;
