import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesPath } from 'config';
import SharedLayout from '../SharedLayout/SharedLayout';
import AlbumTracks from 'pages/albumTracks';

const HomePage = lazy(() => import('pages/home'));
const TracksPage = lazy(() => import('pages/tracks'));
const AlbumsPage = lazy(() => import('pages/albums'));
const TrackInfoPage = lazy(() => import('pages/trackInfo'));
const CreateTrackPage = lazy(() => import('pages/createTrack'));
const CreateAlbumPage = lazy(() => import('pages/createAlbum'));

function App() {
  return (
    <div>
      <Routes>
        <Route path={routesPath.home} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routesPath.albums} element={<AlbumsPage />} />
          <Route path={routesPath.albumTracks} element={<AlbumTracks />} />
          <Route path={routesPath.tracks} element={<TracksPage />} />
          <Route path={routesPath.trackInfo} element={<TrackInfoPage />} />
          <Route path={routesPath.createTrack} element={<CreateTrackPage />} />
          <Route path={routesPath.createAlbum} element={<CreateAlbumPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
