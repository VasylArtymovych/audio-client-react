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
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchTracksByName = createAsyncThunk(
  'tracks/getTracksByName',
  async (name: string, { rejectWithValue }) => {
    try {
      const tracks = await trackApi.getTracksBySearchName(name);
      return tracks;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTrack = createAsyncThunk(
  'tracks/deleteTrack',
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await trackApi.deleteTrackById(id);
      return res.id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
