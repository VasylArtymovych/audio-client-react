import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from 'components/NavBar';
import Player from 'components/Player';
import { Box, LinearProgress } from '@mui/material';

const SharedLayout: FC = () => {
  return (
    <>
      <NavBar />
      <Suspense
        fallback={
          <Box sx={{ width: '100%', paddingTop: '5rem' }}>
            <LinearProgress />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
      <Player />
    </>
  );
};

export default SharedLayout;
