import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  display: flex;

  background: rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  /* width: inherit; */
  outline: 0;
`;

export const StyledModal = styled.div`
  margin: auto;
  background: rgba(67, 40, 107, 0.8);
  border: 1px solid rgba(18, 8, 160, 1);
  border-radius: 8px;
  /* z-index: 11; */
  /* position: relative; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px 8px 0 0;
`;

export const HeaderText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-family: 'fantasy';
  color: lightblue;
  align-self: center;
`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: 0.5px solid rgba(18, 8, 160, 1);
  border-radius: 50%;
  color: lightblue;
  background: none;
  :hover {
    cursor: pointer;
    border: 1px solid #2a20b7;
  }
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

//===================
// export const StyledModal = styled.div`
//   margin: auto;
//   background: white;
//   border-radius: 0.5rem;
// `;

// export const Header = styled.div`
//   border-radius: 8px 8px 0 0;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.3rem;
// `;

// export const HeaderText = styled.div`
//   color: #fff;
//   align-self: center;
//   color: lightgray;
// `;

// export const CloseButton = styled.button`
//   font-size: 0.8rem;
//   border: none;
//   border-radius: 3px;
//   margin-left: 0.5rem;
//   background: none;
//   :hover {
//     cursor: pointer;
//   }
// `;

// export const Content = styled.div`
//   padding: 10px;
//   max-height: 30rem;
//   overflow-x: hidden;
//   overflow-y: auto;
// `;
//=================================
