import { ITrack, LoadingType } from './tracks';

export interface IAlbum {
  name: string;
  artist: string;
}

export interface IAlbumsState {
  albums: IAlbum[];
  albumTracks: ITrack[];
  isLoading: LoadingType;
  error: string;
}
