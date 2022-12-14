import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.bgc === 'persistent' && {
            backgroundColor: '#red',
            color: '#fff',
          }),
        }),
      },
    },
  },
});
