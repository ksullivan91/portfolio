import { Typography } from 'base-ui-react';
import styled from 'styled-components';
import Hero from './components/Hero';
import TopNav from './components/TopNav';
import Header from './components/Header';
import Portfolio from './Portfolio';
import Experience from './Experience';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const StyledH1 = styled(Typography)`
  max-width: 427px;
`;
StyledH1.defaultProps = {
  variant: 'h1',
};

const StyledP = styled(Typography)`
  max-width: 497px;
  margin-top: 16px !important;
`;
StyledP.defaultProps = {
  variant: 'p',
};

export const HomePage = () => {
  return (
    <Container>
      <Header>
        <TopNav />
        <Hero />
      </Header>
      <Portfolio />
      <Experience />
      <Footer>
        <BottomNav />
      </Footer>
    </Container>
  );
};

export default HomePage;
