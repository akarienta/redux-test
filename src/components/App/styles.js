import styled, { keyframes } from 'styled-components';

const spinLogo = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${spinLogo} infinite 20s linear;
  height: 80px;
`;

export { Logo };
