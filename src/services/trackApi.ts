import axios from 'axios';
import { IDeleteTrackResponse, ITrack } from 'types/tracks';

export const getAllTracks = async (): Promise<ITrack[]> => {
  return axios.get<ITrack[]>('tracks/').then(({ data }) => data);
};

export const getTrackById = async (id: string): Promise<ITrack> => {
  return axios.get<ITrack>('tracks/' + id).then(({ data }) => data);
};

export const deleteTrackById = async (
  id: string
): Promise<IDeleteTrackResponse> => {
  return axios
    .delete<IDeleteTrackResponse>('tracks/' + id)
    .then(({ data }) => data);
};

export const getTracksBySearchName = async (
  name: string
): Promise<ITrack[]> => {
  return axios.get(`tracks/search?query=${name}`).then(({ data }) => data);
};
