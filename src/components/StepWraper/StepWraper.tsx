import { FC } from 'react';
import { Card, Grid, Step, StepLabel, Stepper } from '@mui/material';

interface StepWraperProps {
  activeStep: number;
  children: React.ReactNode;
}

const steps = ['Treck information', 'Upload wrap image', 'Upload track'];

const StepWraper: FC<StepWraperProps> = ({ activeStep, children }) => {
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </>
  );
};

export default StepWraper;
