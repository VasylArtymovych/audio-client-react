import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)({
  margin: '10px',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  background: 'lightblue',

  '&>img': {
    width: '3rem',
    height: '3rem',
  },
});
