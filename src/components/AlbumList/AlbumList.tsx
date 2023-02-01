import ImageList from '@mui/material/ImageList';
import { IAlbum } from 'types/albums';
import ListItem from './ListItem';

interface AlbumListProps {
  albums: IAlbum[];
}

const AlbumList = ({ albums }: AlbumListProps) => {
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
