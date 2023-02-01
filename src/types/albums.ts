import { ITrack, LoadingType } from './tracks';

export interface IAlbum {
  _id: string;
  name: string;
  artist: string;
  picture: string;
  tracks: ITrack[];
}

export interface IAlbumsState {
  albums: IAlbum[];
  albumTracks: ITrack[];
  isLoading: LoadingType;
  error: string;
}
