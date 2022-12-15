// import { Container } from '@mui/material';
import Player from 'components/Player';
import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

const SharedLayout: FC = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Player />
    </>
  );
};

export default SharedLayout;
