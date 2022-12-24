import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentApi } from 'services';
import { ICommentDto } from 'types/tracks';

export const addComment = createAsyncThunk(
  'tracks/addComment',
  async (dto: ICommentDto, thunkApi) => {
    try {
      const track = commentApi.addComment(dto);
      return track;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
