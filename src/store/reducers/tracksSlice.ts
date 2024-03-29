import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTracks,
  fetchTrackInfo,
  addComment,
  deleteTrack,
  fetchTracksByName,
} from 'store/operations';
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
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Bed request';
      }
      state.isLoading = 'failed';
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
    // get tracks by search name:
    builder.addCase(fetchTracksByName.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchTracksByName.fulfilled, (state, action) => {
      state.tracks = action.payload;
      state.isLoading = 'succeeded';
    });
    builder.addCase(fetchTracksByName.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Bed request';
      }
      state.isLoading = 'failed';
    });
    // delete track:
    builder.addCase(deleteTrack.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(deleteTrack.fulfilled, (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track._id !== action.payload
      );
      state.isLoading = 'succeeded';
    });
    builder.addCase(deleteTrack.rejected, (state, action) => {
      if (typeof action.payload === 'string') {
        state.error = action.payload;
      } else {
        state.error = 'Bed request';
      }
      state.isLoading = 'failed';
    });
    // add comment:
    builder.addCase(addComment.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.trackInfo?.comments.push(action.payload);
      state.isLoading = 'succeeded';
    });
    builder.addCase(addComment.rejected, (state, action) => {
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
