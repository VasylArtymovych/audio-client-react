import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AlbumIcon from '@mui/icons-material/Album';
import { StarBorder } from '@mui/icons-material';
import { Rating, Tooltip } from '@mui/material';
import { host } from 'config';
import { ImgThumb } from './ListItem.styled';
import { IAlbum } from 'types/albums';

interface ListItemProps {
  item: IAlbum;
}

const ListItem = ({ item }: ListItemProps) => {
  const [value, setValue] = useState<number | null>(1.5);
  const navigate = useNavigate();

  return (
    <>
      <ImageListItem
        sx={{ height: '370px !important', cursor: 'pointer' }}
        onClick={() => navigate(`${item._id}`)}
      >
        <ImageListItemBar
          sx={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100% )',
          }}
          title={item.name}
          actionIcon={
            <Tooltip title={item.artist}>
              <AlbumIcon
                sx={{
                  color: 'rgba(255, 255, 255, 0.54)',
                  marginRight: '1rem',
                }}
                aria-label={`info about ${item.name}`}
              />
            </Tooltip>
          }
          position="bottom"
        />
        <ImgThumb>
          <img
            src={`${host + item.picture}?w=248&fit=crop&auto=format`}
            alt={item.artist}
            loading="lazy"
          />
        </ImgThumb>
        <ImageListItemBar
          title="Rating"
          actionIcon={
            <Rating
              name="Album rating"
              value={value}
              precision={0.5}
              sx={{ color: 'rgba(225,225,225,0.8)', mr: '0.5rem' }}
              emptyIcon={
                <StarBorder
                  sx={{
                    color: 'rgba(225,225,225,0.5)',
                  }}
                />
              }
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          }
          position="top"
        />
      </ImageListItem>
    </>
  );
};

export default ListItem;
