import { createAsyncThunk } from '@reduxjs/toolkit';
import { trackApi } from 'services';
import { ITrack } from 'types/tracks';

export const fetchTracks = createAsyncThunk<ITrack[]>(
  'tracks/getTracks',
  async (_, thunkApi) => {
    try {
      const tracks = await trackApi.getAllTracks();
      return tracks;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTrackInfo = createAsyncThunk(
  'tracks/getTrackById',
  async (id: string, { rejectWithValue }) => {
    try {
      const track = await trackApi.getTrackById(id);
      return track;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
