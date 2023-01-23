import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { fetchTracks } from 'store/operations';

export const useFetchTracks = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);
};
