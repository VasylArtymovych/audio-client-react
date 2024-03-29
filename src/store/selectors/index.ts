import { RootState } from 'store/store';

export const playerSelector = (state: RootState) => state.player;
export const tracksSelector = (state: RootState) => state.tracks;
export const albumsSelector = (state: RootState) => state.albums;
