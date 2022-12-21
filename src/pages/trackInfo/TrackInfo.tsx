import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Grid, TextField } from '@mui/material';
import { ITrack } from 'types/tracks';
import { useNavigate, useParams } from 'react-router-dom';
import { host } from 'config';
import { useInput } from 'hooks';

const TrackInfo: FC = () => {
  const [track, setTrack] = useState<ITrack | null>(null);
  const navigate = useNavigate();
  const username = useInput('');
  const comment = useInput('');
  const { id } = useParams();
  useEffect(() => {
    axios
      .get<ITrack>(host + 'tracks/' + id)
      .then(({ data }) => {
        setTrack(data);
      })
      .catch((error) => console.log('load track error', error));
  }, [id]);

  if (!track) {
    return null;
  }

  return (
    <Container sx={{ p: '5rem 0' }}>
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
        <TextField {...username} label="Your name" fullWidth />
        <TextField {...comment} label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <div>Author - {comment.username}</div>
              <div>Comment - {comment.text}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default TrackInfo;
