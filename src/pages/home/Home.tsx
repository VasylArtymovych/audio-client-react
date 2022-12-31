// import { Container } from '@mui/material';
import { Paper } from '@mui/material';
import React from 'react';
import { HomeContainer, sxHome } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Paper elevation={3} sx={sxHome}>
        <h1>Welcome to music page!</h1>
        <h3>Here, you can find the best music tracks and upload your own.</h3>
      </Paper>
    </HomeContainer>
  );
};

export default Home;
