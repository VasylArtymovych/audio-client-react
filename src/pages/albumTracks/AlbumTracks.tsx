import { Box, Button, Card, Grid, Typography } from '@mui/material';
import SearchTrack from 'components/SearchTrack';
import TrackList from 'components/TrackList';
import React from 'react';
import { Container } from './AlbumTracks.styled';

const AlbumTracks = () => {
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
              {/* <Button sx={sxBtn} onClick={() => navigate(routesPath.create)}>
                Download
              </Button> */}
            </Grid>
          </Box>

          {/** Loader */}
          {/* {isLoading === 'pending' && (
            <Box sx={{ width: '100%', paddingTop: '0.5rem' }}>
              <LinearProgress />
            </Box>
          )} */}
          {/* {isLoading === 'succeeded' && <TrackList tracks={tracks} />} */}
          {/* {isLoading === 'failed' && <h2>{error}</h2>} */}
        </Card>
      </Grid>
    </Container>
  );
};

export default AlbumTracks;
