import styled from '@emotion/styled';
import bgrImg from 'images/home-bgr-img.jpg';

export const HomeContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '5rem 0 0',
  height: '100vh',
  backgroundImage: `url(${bgrImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  color: 'white',
  '&>h1,h3': {
    fontFamily: 'fantasy',
  },
});
