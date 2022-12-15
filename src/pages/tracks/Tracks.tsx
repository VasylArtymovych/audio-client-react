import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, Grid } from '@mui/material';
import TrackList from 'components/TrackList';
import { ITrack } from 'types/tracks';
import { routesPath } from 'config';

const Tracks: FC = () => {
  const navigate = useNavigate();
  const tracks: ITrack[] = [
    {
      id: '1',
      name: 'Treck1',
      artist: 'Amatory',
      text: 'Black and white days',
      listeners: 3,
      audio: 'audio/be43bff6-8279-44cc-b564-d11f2500dd73.jpeg',
      picture: 'image/10239fb6-9cca-4620-b9e9-d1b687225477.jpeg',
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
              <Button onClick={() => navigate(routesPath.create)}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </>
  );
};

export default Tracks;
