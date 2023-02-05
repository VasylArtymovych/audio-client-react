import { FC, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Box, Button, Container, Grid, LinearProgress } from '@mui/material';
import { useAppSelector, useAppDispatch } from 'hooks';
import { tracksSelector } from 'store/selectors';
import { fetchTrackInfo } from 'store/operations';
import { host } from 'config';
import CommentList from 'components/Comments/CommentList';
import CommentForm from 'components/Comments/CommentForm';

const TrackInfo: FC = () => {
  const { trackInfo: track, isLoading, error } = useAppSelector(tracksSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const returnPath = location.state?.from ?? '/tracks';

  useEffect(() => {
    id && dispatch(fetchTrackInfo(id));
  }, [id, dispatch]);

  return (
    <>
      <Container sx={{ p: '5rem 0' }}>
        <Button
          onClick={() => {
            navigate(returnPath);
          }}
        >
          Back to list
        </Button>

        {isLoading === 'pending' && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress color="secondary" />
          </Box>
        )}
        {isLoading === 'failed' && <div>{error}</div>}
        {isLoading === 'succeeded' && track && (
          <>
            <Grid container style={{ margin: '20px 0' }}>
              <img
                src={host + track.picture}
                alt="logo"
                width={200}
                height={200}
              />
              <div style={{ marginLeft: 30 }}>
                <h2>Track - {track.name}</h2>
                <h2>Artist - {track.artist}</h2>
                <h2>Listeners - {track.listeners}</h2>
              </div>
            </Grid>
            <h1>Track text</h1>
            <p>{track.text}</p>
            <CommentForm track={track} />
            <h2>Comments</h2>
            <CommentList track={track} />
          </>
        )}
      </Container>
    </>
  );
};

export default TrackInfo;
