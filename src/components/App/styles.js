import styled, { keyframes } from 'styled-components';

const Main = styled.div`
  text-align: center;
`;

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

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

const Articles = styled.div`
  font-size: large;
  display: inline-block;
`;

export { Main, Logo, Header, Title, Articles };
