import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlayerState } from 'types/player';
import { ITrack } from 'types/tracks';

const initialState: PlayerState = {
  currentTime: 0,
  duration: 0,
  active: null,
  volume: 50,
  pause: true,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playTrack(state) {
      state.pause = false;
    },
    pauseTrack(state) {
      state.pause = true;
    },
    setDuration(state, action: PayloadAction<number>) {
      state.duration = action.payload;
    },
    setVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    setCurrentTime(state, action: PayloadAction<number>) {
      state.currentTime = action.payload;
    },
    setActiveTrack(state, action: PayloadAction<ITrack>) {
      state.active = action.payload;
    },
  },
});

export const {
  playTrack,
  pauseTrack,
  setActiveTrack,
  setCurrentTime,
  setDuration,
  setVolume,
} = playerSlice.actions;
export default playerSlice.reducer;
