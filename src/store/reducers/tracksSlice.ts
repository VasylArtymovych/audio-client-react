import { createSlice } from '@reduxjs/toolkit';
import { fetchTracks } from 'store/operations';
import { ITracksState } from 'types/tracks';

const initialState: ITracksState = {
  tracks: [],
  isLoading: 'idle',
  error: '',
};

const tracksSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export default tracksSlice.reducer;
