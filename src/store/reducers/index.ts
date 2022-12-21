import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';
import tracksReducer from './tracksSlice';

export const rootReducer = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});
export * from './playerSlice';
export * from './tracksSlice';
