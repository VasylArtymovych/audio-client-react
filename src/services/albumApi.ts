import axios from 'axios';
import { IAlbum } from 'types/albums';

export const getAllUlbums = async (): Promise<IAlbum[]> => {
  return axios.get<IAlbum[]>('albums/').then(({ data }) => data);
};

export const getUlbumsByName = async (name: string): Promise<IAlbum[]> => {
  return axios.get<IAlbum[]>(`albums/search?query=${name}`).then(({ data }) => data);
};
