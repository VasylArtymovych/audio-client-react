import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)`
  width: 20rem;
  display: flex;
  flex-direction: column;

  .MuiTextField-root {
    margin-bottom: 15px;
  }
  .MuiTextField-root input {
    color: white;
    background-color: #572f87;
  }
`;
