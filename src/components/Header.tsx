import styled from 'styled-components';
import { ReactNode } from 'react';

export const GradientBackground = styled.div`
  filter: blur(2250px);
  position: absolute;
  z-index: -2;
  top: 0;
  left: -32px;
  right: 32px;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-height: 392px;
  background: linear-gradient(
    135deg,
    rgba(232, 91, 129, 0.9) 0%,
    rgba(112, 72, 232, 0.9) 100%
  );
  filter: blur(200px);
  opacity: 0.25;
`;
export const GradientShape = styled.div`
  position: absolute;
  width: 224px;
  height: 224px;
  left: -41px;
  top: 32px;
  background: #8ce0f3;
  filter: blur(185px);
  opacity: 1;
  z-index: -1;
`;
const StyledSvg = styled.svg`
  position: absolute;
  z-index: -1;
  left: 0;
  bottom: 41px;
  right: 0;
  transform: rotate(0deg);
  filter: blur(50px);
  opacity: 0.15;
`;

const HeaderWrapper = styled.div`
  position: relative;
  padding: 0 32px;
`;

const Header: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HeaderWrapper>
      {children}
      <GradientShape />
      <GradientBackground />
      <HeaderSvg />
    </HeaderWrapper>
  );
};

const HeaderSvg: React.FC = () => {
  return (
    <StyledSvg
      xmlns='http://www.w3.org/2000/svg'
      width='964'
      height='266'
      fill='none'
    >
      <path
        fill='url(#a)'
        d='M960.708 257.429a7.986 7.986 0 0 1-8.091 7.896l-943.93-12.24a8.015 8.015 0 0 1-7.908-8.103L3.337 20.537c.045-3.992 3.017-7.326 6.984-7.774 43.469-4.902 284.606-29.191 506.724 7.47 213.974 35.318 394.337 13.408 436.829 7.25 4.951-.717 9.418 3.157 9.361 8.16l-2.527 221.786Z'
      />
      <defs>
        <linearGradient
          id='a'
          x1='821.168'
          x2='79.779'
          y1='216.117'
          y2='364.894'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#5E48E8' />
          <stop offset='1' stopColor='#5028C6' stopOpacity='.69' />
        </linearGradient>
      </defs>
    </StyledSvg>
  );
};
export default Header;
