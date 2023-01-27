import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import AlbumIcon from '@mui/icons-material/Album';
import { AppBar, DrawerHeader, drawerWidth, StyledLink } from './NavBar.styled';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'Tracks', href: '/tracks' },
  { text: 'Albums', href: '/albums' },
];

export default function NavBar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#130e36' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            component="div"
            onClick={onLogoClick}
          >
            Audio storage
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: '#716b99',
            color: '#fff',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          {menuItems.map(({ text, href }, index) => (
            <ListItem key={text} disablePadding>
              <StyledLink to={href}>
                <ListItemIcon>
                  {index === 0 && <HomeIcon sx={{ color: 'white' }} />}
                  {index === 1 && <AudiotrackIcon sx={{ color: 'white' }} />}
                  {index === 2 && <AlbumIcon sx={{ color: 'white' }} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
