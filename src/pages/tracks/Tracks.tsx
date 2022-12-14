import { Box, Button, Card, Grid } from '@mui/material';
import TrackList from 'components/TrackList';
import React from 'react';
import { ITrack } from 'types/tracks';

const Tracks = () => {
  const tracks: ITrack[] = [
    {
      id: '1',
      name: 'Treck1',
      artist: 'Amatory',
      text: 'Black and white days',
      listeners: 3,
      audio: 'audio/be43bff6-8279-44cc-b564-d11f2500dd73.jpeg',
      picture: 'image/46d9e9c1-8d55-4e56-9ea5-4798ada4dfe4.jpg',
      comments: [],
    },
  ];
  return (
    <>
      <Grid container justifyContent="center" sx={{ paddingTop: '5rem' }}>
        <Card style={{ width: '80%' }}>
          <Box p={2}>
            <Grid container justifyContent="space-between">
              <h2>Tracks list</h2>
              <Button onClick={() => {}}>Download</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </>
  );
};

export default Tracks;
