import { useEffect } from 'react';
import { playerSelector } from 'store';
import { ITrack } from 'types/tracks';
import { useAppDispatch, useAppSelector } from './redux';
import { setCurrentTime, setDuration } from 'store/reducers';

let audio: HTMLAudioElement;

export const usePlayerAudio = (track: ITrack) => {
  const { active, volume } = useAppSelector(playerSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      if (track) {
        console.log(track.audio);
        audio.src = track.audio;
        audio.volume = volume / 100;
        audio.onloadedmetadata = () => {
          dispatch(setDuration(Math.ceil(audio.duration)));
        };
        audio.ontimeupdate = () => {
          dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
        };
      }
    }
  }, [active, dispatch, track, volume]);

  return { audio };
};
