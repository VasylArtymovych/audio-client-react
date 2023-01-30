import styled from '@emotion/styled';
import { theme } from 'styles/theme';
import { blue } from '@mui/material/colors';
import tracksBgrImg from 'images/music-background.jpeg';

export const sxBtn = {
  // color: (theme: Theme) => theme.palette.primary.dark,
  color: theme.palette.primary.dark,
  '&:hover': { backgroundColor: blue[100] },
};

export const Container = styled.div({
  height: '100vh',
  background: `url(${tracksBgrImg})`,
});
