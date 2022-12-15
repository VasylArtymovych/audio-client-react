import { FC } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { ITrack } from 'types/tracks';
import { useNavigate } from 'react-router-dom';

const TrackInfo: FC = () => {
  const navigate = useNavigate();
  const track: ITrack = {
    id: '1',
    name: 'Treck1',
    artist: 'Amatory',
    text: 'Black and white days',
    listeners: 3,
    audio: 'audio/be43bff6-8279-44cc-b564-d11f2500dd73.jpeg',
    picture: 'image/10239fb6-9cca-4620-b9e9-d1b687225477.jpeg',
    comments: [],
  };

  return (
    <Container sx={{ pt: '5rem' }}>
      <Button onClick={() => navigate('/tracks')}>Back to list</Button>
      <Grid container style={{ margin: '20px 0' }}>
        <img
          src={`http://localhost:4000/${track.picture}`}
          alt="logo"
          width={200}
          height={200}
        />
        <div style={{ marginLeft: 30 }}>
          <h2>Track - {track.name}</h2>
          <h2>Artist - {track.artist}</h2>
          <h2>Lesteners - {track.listeners}</h2>
        </div>
      </Grid>
      <h1>Track text</h1>
      <p>{track.text}</p>
      <h2>Comments</h2>
      <Grid container>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment.id}>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrackInfo;
