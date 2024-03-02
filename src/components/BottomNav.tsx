import { Typography } from 'base-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatedNavLink } from './TopNav';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 240px;
  margin: 40px auto 16px auto;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledH5 = styled(Typography)`
  cursor: pointer;
`;
StyledH5.defaultProps = {
  variant: 'h5',
};

function BottomNav() {
  return (
    <Container>
      <AnimatedNavLink>
        <Link to='https://github.com/ksullivan91' target='_blank'>
          Github
        </Link>
      </AnimatedNavLink>
      <AnimatedNavLink>
        <Link
          to='https://www.linkedin.com/in/kyle-sullivan-5a337813a/'
          target='_blank'
        >
          LinkedIn
        </Link>
      </AnimatedNavLink>
    </Container>
  );
}

export default BottomNav;
