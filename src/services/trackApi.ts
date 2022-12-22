import axios from 'axios';
import { ITrack } from 'types/tracks';

export const getAllTracks = async (): Promise<ITrack[]> => {
  return axios.get<ITrack[]>('tracks/').then(({ data }) => data);
};

export const getTrackById = async (id: string): Promise<ITrack> => {
  return axios.get<ITrack>('tracks/' + id).then(({ data }) => data);
};
