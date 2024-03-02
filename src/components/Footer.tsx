import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;
const Footer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Footer;
