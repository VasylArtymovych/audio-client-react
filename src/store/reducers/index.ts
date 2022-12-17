import { combineReducers } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';

export const rootReducer = combineReducers({ player: playerReducer });
export * from './playerSlice';
