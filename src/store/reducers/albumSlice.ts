import { createSlice } from '@reduxjs/toolkit';
import { IAlbumsState } from 'types/albums';
import { fetchAlbums, fetchAlbumsByName } from 'store/operations';

const initialState: IAlbumsState = {
  albums: [],
  albumTracks: [],
  isLoading: 'idle',
  error: '',
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetch albums:
    builder.addCase(fetchAlbums.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = 'succeeded';
      state.albums = action.payload;
    });

    builder.addCase(fetchAlbums.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Error to fetch albums';
      }
      state.isLoading = 'failed';
    });
    // fetch albums by name:
    builder.addCase(fetchAlbumsByName.pending, (state) => {
      state.isLoading = 'pending';
    });
  },
});

export default albumSlice.reducer;
