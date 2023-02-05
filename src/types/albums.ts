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
  album: IAlbum | null;
  isLoading: LoadingType;
  error: string;
}

export interface IAddTrackData {
  trackId: string;
  albumName: string;
}
