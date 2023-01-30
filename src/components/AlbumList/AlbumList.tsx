import ImageList from '@mui/material/ImageList';
import { useSelector } from 'react-redux';
import { albumsSelector } from 'store/selectors';
import ListItem from './ListItem';

const AlbumList = () => {
  const { albums } = useSelector(albumsSelector);

  return (
    <ImageList
      gap={15}
      sx={{
        padding: '1rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)) !important',
      }}
    >
      {albums.map((item) => (
        <ListItem item={item} key={item.picture} />
      ))}
    </ImageList>
  );
};

export default AlbumList;
