export interface IComment {
  _id: string;
  username: string;
  text: string;
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

type LoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface ITracksState {
  tracks: ITrack[];
  isLoading: LoadingType;
  error: string;
}
