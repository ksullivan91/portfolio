import { Colors, Typography } from 'base-ui-react';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  position: relative;
  left: -24px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledH5 = styled(Typography)`
  display: inline-block;
  background: none;
  border: none;
  backface-visibility: hidden;
  padding: 1em 2em;
  font-size: 1.5em;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  color: #f5f5f5;
  transition: color 0.2s;
  box-shadow: inset 0 0 0 4px #f5f5f5, 0 0 1px 1px rgba(black, 0.25);
  text-shadow: 0 0 2px rgba(black, 0.5);
  position: relative;
  overflow: hidden;
  cursor: pointer !important;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    transition: transform 0.3s ease;
    pointer-events: none;
    box-sizing: border-box;
  }

  &:before {
    border-color: ${Colors.pink} transparent;
    transform: skewX(-84deg);
  }

  &:after {
    border-color: transparent ${Colors.pink};
    transform: skewY(40deg);
    transition: transform 0.4s;
  }

  &:hover {
    color: ${Colors.pink};
    &:before,
    &:after {
      transform: none;
      opacity: 1;
    }
  }
`;
StyledH5.defaultProps = {
  variant: 'h5',
};

const AnimatedNavLinkContainer = styled.div`
  max-width: 241px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  right: -48px;
`;

export const AnimatedNavLink: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <StyledH5>{children}</StyledH5>;
};

function TopNav() {
  return (
    <Container>
      <AnimatedNavLink>
        <Link to='/'>Kyle Sullivan</Link>
      </AnimatedNavLink>
      <AnimatedNavLinkContainer>
        <AnimatedNavLink>
          <Link to='https://github.com/ksullivan91'>Portfolio</Link>
        </AnimatedNavLink>
        <AnimatedNavLink>
          <Link to='https://www.linkedin.com/in/kyle-sullivan-5a337813a/'>
            Contact
          </Link>
        </AnimatedNavLink>
      </AnimatedNavLinkContainer>
    </Container>
  );
}

export default TopNav;
