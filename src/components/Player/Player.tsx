import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { ITrack } from 'types/tracks';
import TrackProgress from 'components/TrackProgress';
import { StyledContainer } from './Player.styled';

const Player = () => {
  const track: ITrack = {
    id: '1',
    name: 'Treck1',
    artist: 'Amatory',
    text: 'Black and white days',
    listeners: 3,
    audio: '',
    picture: '',
    comments: [],
  };
  const pause = false; // !!!!!

  const play = () => {};

  return (
    <StyledContainer>
      <IconButton onClick={play}>
        {!pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={(e) => {}} />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress left={0} right={100} onChange={(e) => {}} />
    </StyledContainer>
  );
};

export default Player;
