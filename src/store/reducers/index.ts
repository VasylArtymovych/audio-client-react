import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';
import tracksReducer from './tracksSlice';
import albumReducer from './albumSlice';

export const rootReducer = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
  albums: albumReducer,
});

export * from './playerSlice';
export * from './tracksSlice';
