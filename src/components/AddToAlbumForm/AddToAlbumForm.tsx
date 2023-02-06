import { FC } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useInput } from 'hooks';
import { StyledBox } from './AddToAlbumForm.styled';
import { addTrackToAlbum } from 'store/operations';
import { toast } from 'react-toastify';
import { toastConfig } from 'config';

interface AddToAlbumFormProps {
  text: string;
  trackId: string;
  onCloseModal: () => void;
}

const AddToAlbumForm: FC<AddToAlbumFormProps> = ({
  text,
  trackId,
  onCloseModal,
}) => {
  const albumName = useInput('');
  const dispatch = useAppDispatch();

  const addTrackHandler = () => {
    if (albumName.value) {
      dispatch(addTrackToAlbum({ trackId, albumName: albumName.value }));
      onCloseModal();
    } else {
      toast.error('Enter album name', toastConfig);
    }
  };

  return (
    <StyledBox
      component="form"
      sx={{ width: '20rem', display: 'flex', flexDirection: 'column' }}
    >
      <Typography
        component="h3"
        sx={{
          alignText: 'center',
          fontFamily: 'fantasy',
          color: 'lightblue',
          fontSize: '1rem',
        }}
      >
        {text}
      </Typography>
      <TextField
        {...albumName}
        id="addInput"
        variant="filled"
        label="album name"
        required
        fullWidth
        InputLabelProps={{
          style: { color: 'darkblue' },
        }}
      />

      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={addTrackHandler}
      >
        Add
      </Button>
    </StyledBox>
  );
};

export default AddToAlbumForm;
