import { FC, useEffect } from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useInput } from 'hooks';
import { useAppSelector, useAppDispatch } from 'hooks';
import { tracksSelector } from 'store';
import { fetchTrackInfo } from 'store/operations';

const TrackInfo: FC = () => {
  const { trackInfo: track, isLoading, error } = useAppSelector(tracksSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const username = useInput('');
  const comment = useInput('');
  const { id } = useParams();

  useEffect(() => {
    id && dispatch(fetchTrackInfo(id));
  }, [id, dispatch]);

  return (
    <>
      <Container sx={{ p: '5rem 0' }}>
        <Button onClick={() => navigate('/tracks')}>Back to list</Button>
        {isLoading === 'pending' && <div>Is loading...</div>}
        {isLoading === 'failed' && <div>{error}</div>}
        {isLoading === 'succeeded' && track && (
          <>
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
              <TextField
                {...comment}
                label="Comment"
                fullWidth
                multiline
                rows={4}
              />
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
          </>
        )}
      </Container>
    </>
  );
};

export default TrackInfo;
