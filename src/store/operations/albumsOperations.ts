import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAlbum } from 'types/albums';
import { albumApi } from 'services';

export const fetchAlbums = createAsyncThunk<IAlbum[]>(
  'albums/getAlbums',
  async (_, thunkApi) => {
    try {
      const albums = await albumApi.getAllUlbums();
      return albums;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchAlbumsByName = createAsyncThunk(
  'albums/getAlbumsByName',
  async (name: string, { rejectWithValue }) => {
    try {
      const albums = await albumApi.getUlbumsByName(name);
      return albums;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAlbumTracks = createAsyncThunk(
  'albums/getAlbumTracks',
  async (albumId: string, { rejectWithValue }) => {
    try {
      const album = await albumApi.getUlbumTracks(albumId);
      return album;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
