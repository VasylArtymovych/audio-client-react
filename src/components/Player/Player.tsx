import { ChangeEvent } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import TrackProgress from 'components/TrackProgress';
import { StyledContainer } from './Player.styled';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { setCurrentTime, setVolume } from 'store/reducers';
import { playerSelector } from 'store';

import { usePlayerAudio } from 'hooks';

const Player = () => {
  const { currentTime, duration, active, volume, pause } =
    useAppSelector(playerSelector);
  const dispatch = useAppDispatch();
  const { audio, play } = usePlayerAudio();

  const onChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(setVolume(Number(e.target.value)));
  };

  const onChangeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    dispatch(setCurrentTime(Number(e.target.value)));
  };

  if (!active) {
    return null;
  }

  return (
    <StyledContainer>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: '0 20px' }}
      >
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: 'grey' }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        value={currentTime}
        right={duration}
        onChange={onChangeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: 'auto' }} />
      <TrackProgress value={volume} right={100} onChange={onChangeVolume} />
    </StyledContainer>
  );
};

export default Player;
