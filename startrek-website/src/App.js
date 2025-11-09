import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.main};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
`;

const App = () => {
  return (
    <Container>
      <Header>
        Star Trek Website <FaStar />
      </Header>
      <Main>
        <h1>Welcome to the Star Trek Universe</h1>
        <p>Explore the final frontier with us.</p>
      </Main>
      <Footer>
        &copy; {new Date().getFullYear()} Star Trek Fans
      </Footer>
    </Container>
  );
};

export default App;
