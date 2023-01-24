import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { useAppDispatch, useInput } from 'hooks';
import { ITrack } from 'types/tracks';
import { addComment } from 'store/operations';
import { toast } from 'react-toastify';
import { toastConfig } from 'config';

interface CommentFormProps {
  track: ITrack;
}
const CommentForm = ({ track }: CommentFormProps) => {
  const username = useInput('');
  const comment = useInput('');
  const dispatch = useAppDispatch();

  const onAddComment = () => {
    if (username.value === '' || comment.value === '') {
      return toast.error('Enter name and comment.', toastConfig);
    }
    dispatch(
      addComment({
        username: String(username.value),
        text: String(comment.value),
        trackId: track._id,
      })
    );
  };

  return (
    <Grid container>
      <h2>Leave comment</h2>
      <TextField
        {...username}
        label="Your name"
        fullWidth
        sx={{ background: 'whitesmoke' }}
      />
      <TextField
        {...comment}
        label="Comment"
        fullWidth
        multiline
        rows={4}
        sx={{ background: 'whitesmoke' }}
      />
      <Button onClick={onAddComment}>Send</Button>
    </Grid>
  );
};

export default CommentForm;
