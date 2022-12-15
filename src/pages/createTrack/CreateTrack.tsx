import { Button, Container, Grid } from '@mui/material';
import StepWraper from 'components/StepWraper';
import React, { useState } from 'react';

const CreateTrack = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

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
        <h2>Hello</h2>
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
