import { Button, TextField, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useInput } from 'hooks';
import { FC } from 'react';
import { StyledBox } from './AddToAlbumForm.styled';

interface AddToAlbumFormProps {
  text: string;
}

const AddToAlbumForm: FC<AddToAlbumFormProps> = ({ text }) => {
  const albumName = useInput('');

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

      <Button variant="outlined" startIcon={<AddIcon />}>
        Add
      </Button>
    </StyledBox>
  );
};

export default AddToAlbumForm;
