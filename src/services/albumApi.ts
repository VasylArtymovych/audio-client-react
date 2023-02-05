import axios from 'axios';
import { IAlbum } from 'types/albums';

export const getAllUlbums = async (): Promise<IAlbum[]> => {
  return axios
    .get<IAlbum[]>('albums/')
    .then(({ data }) => data)
    .catch((error) => error);
};

export const getUlbumsByName = async (name: string): Promise<IAlbum[]> => {
  return axios
    .get<IAlbum[]>(`albums/search?query=${name}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

export const getUlbumTracks = async (albumId: string): Promise<IAlbum> => {
  return axios
    .get<IAlbum>(`albums/current/${albumId}`)
    .then(({ data }) => data)
    .catch((error) => error);
};

export const addTrackToAlbum = async (
  albumId: string,
  albumName: string
): Promise<string> => {
  return axios
    .patch<string>(`albums/add/${albumId}`, { albumName })
    .then(({ data }) => data)
    .catch((error) => error);
};
