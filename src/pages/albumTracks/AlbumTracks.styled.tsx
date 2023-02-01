import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import tracksBgrImg from 'images/music-background.jpeg';

export const sxBtn = {
  margin: '5rem 0 0 1rem',
  color: theme.palette.primary.dark,
  '&:hover': { backgroundColor: 'rgba(67, 40, 107, 0.8)' },
};

export const Container = styled.div({
  height: '100vh',
  background: `url(${tracksBgrImg})`,
});
