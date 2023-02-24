import { useEffect } from 'react';
import { playerSelector } from 'store/selectors';
import { useAppDispatch, useAppSelector } from './redux';
import {
  pauseTrack,
  playTrack,
  setCurrentTime,
  setDuration,
} from 'store/reducers';

let audio: HTMLAudioElement = new Audio();

export const usePlayerAudio = () => {
  const { active, pause } = useAppSelector(playerSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (active) {
      audio.src = active.audio;
      audio.volume = 0.5;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
      dispatch(playTrack());
      audio.play();
    }
  }, [active, dispatch]);

  const play = () => {
    if (pause) {
      dispatch(playTrack());
      audio.play();
    } else {
      dispatch(pauseTrack());
      audio.pause();
    }
  };

  return { audio, play };
};
