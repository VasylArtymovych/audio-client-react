// import { Container } from '@mui/material';
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
    </>
  );
};

export default SharedLayout;
