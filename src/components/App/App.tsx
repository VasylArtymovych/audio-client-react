import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesPath } from 'config';
import SharedLayout from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/home'));
const TracksPage = lazy(() => import('pages/tracks'));
const AlbumsPage = lazy(() => import('pages/albums'));

function App() {
  return (
    <div>
      <Routes>
        <Route path={routesPath.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routesPath.tracks} element={<TracksPage />} />
          <Route path={routesPath.albums} element={<AlbumsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
