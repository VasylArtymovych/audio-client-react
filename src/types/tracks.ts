export interface IComment {
  _id: string;
  username: string;
  text: string;
  trackId: string;
}

export interface ICommentDto {
  username: string;
  text: string;
  trackId: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listeners: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface ITracksState {
  tracks: ITrack[];
  trackInfo: ITrack | null;
  isLoading: LoadingType;
  error: string;
}

export interface IDeleteTrackResponse {
  message: string;
  id: string;
}
