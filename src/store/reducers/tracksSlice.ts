import { createSlice } from '@reduxjs/toolkit';
import { fetchTracks, fetchTrackInfo } from 'store/operations';
import { ITracksState } from 'types/tracks';

const initialState: ITracksState = {
  tracks: [],
  trackInfo: null,
  isLoading: 'idle',
  error: '',
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get all tracks:
    builder.addCase(fetchTracks.pending, (state, action) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload;
      state.isLoading = 'succeeded';
    });
    builder.addCase(fetchTracks.rejected, (state, action) => {
      state.isLoading = 'failed';
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
    // get track by id:
    builder.addCase(fetchTrackInfo.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchTrackInfo.fulfilled, (state, action) => {
      state.trackInfo = action.payload;
      state.isLoading = 'succeeded';
    });
    builder.addCase(fetchTrackInfo.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Bed request';
      }
      state.isLoading = 'failed';
    });
  },
});

export default tracksSlice.reducer;
