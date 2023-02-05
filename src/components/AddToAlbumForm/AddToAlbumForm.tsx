import { Button, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAppDispatch, useInput } from 'hooks';
import { FC } from 'react';
import { StyledBox } from './AddToAlbumForm.styled';
// import { albumsSelector } from 'store/selectors';
import { addTrackToAlbum } from 'store/operations';

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
  // const { isLoading, error } = useAppSelector(albumsSelector);

  const addTrackHandler = () => {
    if (albumName.value) {
      dispatch(addTrackToAlbum({ trackId, albumName: albumName.value }));
      onCloseModal();
    } else {
      console.log('Enter name!');
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
