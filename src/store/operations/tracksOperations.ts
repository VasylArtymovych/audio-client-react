import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ITrack } from 'types/tracks';

export const fetchTracks = createAsyncThunk<ITrack[]>(
  'tracks/getTracks',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('tracks');

      return response.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
