import { Button, Colors, Typography } from 'base-ui-react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledH1 = styled(Typography)`
  max-width: 427px;
`;
StyledH1.defaultProps = {
  variant: 'h1',
  color: `${Colors.monoBlack}`,
};

const StyledP = styled(Typography)`
  max-width: 497px;
  margin-top: 16px !important;
`;
StyledP.defaultProps = {
  variant: 'p',
  color: `${Colors.monoBlack}`,
};

const StyledButton = styled(Button)`
  margin-top: 16px;
  max-width: 254px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
StyledButton.defaultProps = {
  variant: 'primary',
};

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Hero = () => {
  return (
    <Container>
      <SectionWrapper>
        <StyledH1>Kyle Sullivan Software Engineer</StyledH1>
        <StyledP>
          Dedicated Full Stack Developer with a passion for UI/UX. Aiming to
          apply my design and coding knowledge to enhance user experiences and
          contribute to innovative web projects.
        </StyledP>
        <StyledButton>
          <a href='/Kyle-Sullivan-resume.pdf'>Download Resume</a>
        </StyledButton>
      </SectionWrapper>
      <SectionWrapper>
        <img
          src='https://res.cloudinary.com/dcw3kjyjc/image/upload/v1709218016/heroImage_fl1okv.png'
          alt='placeholder'
        />
      </SectionWrapper>
    </Container>
  );
};

export default Hero;
