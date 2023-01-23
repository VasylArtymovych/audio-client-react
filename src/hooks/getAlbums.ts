import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { fetchAlbums } from 'store/operations';

export const useFetchAlbums = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);
};
