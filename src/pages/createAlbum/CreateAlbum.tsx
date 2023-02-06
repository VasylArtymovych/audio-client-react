import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Container, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { host, toastConfig } from 'config';
import { useInput } from 'hooks';
import StepWraper from 'components/StepWraper';
import FileUpload from 'components/FileUpload';

const createAlbumSteps = ['Album information', 'Upload album image'];

const CreateAlbum = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState<any>(null);
  const [imgSrc, setImgSrc] = useState<string>('');
  const name = useInput('');
  const artist = useInput('');
  const navigate = useNavigate();

  const back = () => {
    setActiveStep((prev) => (prev -= 1));
  };

  const next = () => {
    if (activeStep !== 1) {
      setActiveStep((prev) => (prev += 1));
    } else {
      if (!name.value || !artist.value) {
        toast.error('Missing track or artist name', toastConfig);
        return;
      } else if (!picture) {
        toast.error('Upload image', toastConfig);
        return;
      } else {
        const formData = new FormData();
        formData.append('name', name.value);
        formData.append('artist', artist.value);
        formData.append('picture', picture);

        axios
          .post(host + 'albums', formData)
          .then(() => {
            navigate('/albums', { replace: true });
          })
          .catch((error) => toast.error(error.message, toastConfig));
      }
    }
  };

  useEffect(() => {
    if (picture) {
      setImgSrc(URL.createObjectURL(picture));
    }
  }, [picture]);

  return (
    <Container sx={{ p: '5rem 0' }}>
      <StepWraper activeStep={activeStep} steps={createAlbumSteps}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: '1rem' }}>
            <TextField
              {...name}
              label={'Album name'}
              style={{ marginTop: '0.5rem' }}
              required
            />
            <TextField
              {...artist}
              label={'Artist or Band name'}
              style={{ marginTop: '0.5rem' }}
              required
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept={'image/*'}>
            <Button>Upload image</Button>
            {picture && (
              <img
                src={imgSrc}
                alt="uploadImage"
                width="100px"
                height="100px"
              />
            )}
          </FileUpload>
        )}
      </StepWraper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>{activeStep === 1 ? 'Create' : 'Next'}</Button>
      </Grid>
    </Container>
  );
};

export default CreateAlbum;
