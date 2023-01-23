import { TextField } from '@mui/material';
import { useAppDispatch } from 'hooks';
import React, { useState } from 'react';
import { fetchAlbumsByName, fetchTracksByName } from 'store/operations';

interface SearchTrackProps {
  type: string;
}
const SearchTrack = ({ type }: SearchTrackProps) => {
  const [search, setSearch] = useState<string>('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        switch (type) {
          case 'tracks':
            dispatch(fetchTracksByName(e.target.value));
            break;
          case 'albums':
            dispatch(fetchAlbumsByName(e.target.value));
            break;
          default:
            return;
        }
      }, 700)
    );
  };
  return (
    <TextField
      fullWidth
      value={search}
      label="Search by track name"
      onChange={onSearch}
      sx={{ background: 'whitesmoke' }}
    />
  );
};

export default SearchTrack;
