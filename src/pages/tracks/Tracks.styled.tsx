import { blue } from '@mui/material/colors';
import { theme } from 'styles/theme';

export const sxBtn = {
  // color: (theme: Theme) => theme.palette.primary.dark,
  color: theme.palette.primary.dark,
  '&:hover': { backgroundColor: blue[100] },
};
