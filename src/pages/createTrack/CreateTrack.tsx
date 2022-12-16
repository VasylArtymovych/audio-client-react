import { Button, Container, Grid, TextField } from '@mui/material';
import FileUpload from 'components/FileUpload';
import StepWraper from 'components/StepWraper';
import React, { useState } from 'react';

const CreateTrack = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  console.log(picture, audio);
  const back = () => {
    setActiveStep((prev) => (prev -= 1));
  };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => (prev += 1));
    }
  };

  return (
    <Container sx={{ p: '5rem 0' }}>
      <StepWraper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={'column'} style={{ padding: '1rem' }}>
            <TextField label={'Track name'} style={{ marginTop: '0.5rem' }} />
            <TextField label={'Artist name'} style={{ marginTop: '0.5rem' }} />
            <TextField
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
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept={'audio/*'}>
            <Button>Upload track</Button>
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
