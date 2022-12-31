import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Grid, TextField } from '@mui/material';
import FileUpload from 'components/FileUpload';
import StepWraper from 'components/StepWraper';
import { host, routesPath } from 'config';
import { useInput } from 'hooks';

const CreateTrack = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState<any>(null);
  const [audio, setAudio] = useState<any>(null);
  const [src, setSrc] = useState<string>('');
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const navigate = useNavigate();

  const back = () => {
    setActiveStep((prev) => (prev -= 1));
  };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => (prev += 1));
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      if (picture) {
        formData.append('picture', picture);
      }
      if (audio) {
        formData.append('audio', audio);
      }
      axios
        .post(host + 'tracks', formData)
        .then(() => {
          navigate(routesPath.tracks, { replace: true });
        })
        .catch((error) => console.log('axios error', error));
    }
  };

  useEffect(() => {
    if (picture) {
      let reader = new FileReader();
      reader.readAsDataURL(picture);
      reader.onload = (e) => {
        e.target &&
          typeof e.target.result === 'string' &&
          setSrc(e.target.result);
      };
    }
  }, [picture]);

  return (
    <Container sx={{ p: '5rem 0' }}>
      <StepWraper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: '1rem' }}>
            <TextField
              {...name}
              label={'Track name'}
              style={{ marginTop: '0.5rem' }}
            />
            <TextField
              {...artist}
              label={'Artist name'}
              style={{ marginTop: '0.5rem' }}
            />
            <TextField
              {...text}
              label={'Track text'}
              multiline
              minRows={4}
              style={{ marginTop: '0.5rem' }}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept={'image/*'}>
            <Button>Upload image</Button>
            {picture && (
              <img
                id="uploadPreview"
                src={src}
                alt="uploadImage"
                width="100px"
                height="100px"
              />
            )}
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept={'audio/*'}>
            <Button>Upload track</Button>
            {audio && <div>{audio.name}</div>}
          </FileUpload>
        )}
      </StepWraper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </Container>
  );
};

export default CreateTrack;
