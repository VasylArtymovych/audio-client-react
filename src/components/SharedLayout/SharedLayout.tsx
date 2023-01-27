import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Player from 'components/Player';

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
