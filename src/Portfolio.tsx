import React from 'react';
import styled, { css } from 'styled-components';
import {
  Accordion,
  AccordionItem,
  Colors,
  Typography,
  useHover,
} from 'base-ui-react';
import { Link } from 'react-router-dom';
import { portfolioData } from './portfolioData';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 32px 40px 0;
  h4 {
    padding-left: 32px;
  }
`;

const CardContainer = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 32px;
  margin-right: 32px;
  padding: 20px 0px 20px 32px;
  height: 100%;
  max-height: 295px;
  max-width: calc(50% - 32px);
  width: 100%;
  cursor: pointer;
  display: inline-flex;
  &:nth-child(even) {
    margin-right: 0px;
  }
  a {
    text-decoration: none;
  }
  h4 {
    margin: 16px 0 16px 0;
    padding-left: 0px;
  }
  p {
    max-width: 368px;
  }
`;

const InteractiveH3 = styled(Typography)<{ isHovered: boolean }>`
  border-bottom: 4px solid transparent;
  position: relative;
  overflow: hidden;
  cursor: pointer !important;
  box-shadow: inset 0 0 0 4px #f5f5f5, 0 0 1px 1px rgba(black, 0.25);
  transition: color 0.2s;
  color: #f5f5f5;
  max-width: 200px;
  padding-bottom: 8px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 4px solid transparent;
    transition: transform 0.3s ease;
    pointer-events: none;
    box-sizing: border-box;
  }

  &:before {
    border-color: ${Colors.pink} transparent;
    transform: skewX(-90deg);
  }

  &:after {
    border-color: transparent ${Colors.pink};
    transform: skewY(40deg);
    transition: transform 0.4s;
  }
  ${({ isHovered }) =>
    isHovered &&
    css`
      color: ${Colors.pink} !important;
      &:before,
      &:after {
        transform: none;
        opacity: 1;
      }
    `}
`;
InteractiveH3.defaultProps = {
  variant: 'h3',
};

export interface CardProps {
  linkUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  linkUrl,
  title,
  subtitle,
  description,
}) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <CardContainer ref={hoverRef}>
      <Link to={linkUrl} target='_blank'>
        <InteractiveH3 isHovered={isHovered} variant='h3'>
          {title}
        </InteractiveH3>
        <Typography variant='h4'>{subtitle}</Typography>
        <Typography variant='p'>{description}</Typography>
      </Link>
    </CardContainer>
  );
};
const Portfolio: React.FC = () => {
  return (
    <Container>
      <Accordion>
        <AccordionItem
          summary='Recent Work'
          defaultOpenChildrenIndices={[0, 1]}
        >
          {portfolioData.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </AccordionItem>
      </Accordion>
    </Container>
  );
};

export default Portfolio;
