import React from 'react';
import styled from 'styled-components';
import { Colors } from './Colors';
import { Typography } from 'base-ui-react';

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 0;
  h4 {
    padding-left: 32px;
  }
`;

const Experience: React.FC = () => {
  return (
    <Container>
      <Typography variant='h4'>Experience</Typography>
      <JobExperience
        title='Software Engineer'
        company='SupplyPike'
        duration='01/2017 - 02/2024'
        location='Fayetteville Arkansas'
        description='Supervise the design and development of engaging and user-friendly interfaces, including tools to promote internal team efficiency and an excellent user experience.'
      />
      <JobExperience
        title='Software Engineer'
        company='SupplyPike'
        duration='01/2017 - 02/2024'
        location='Fayetteville Arkansas'
        description='Supervise the design and development of engaging and user-friendly interfaces, including tools to promote internal team efficiency and an excellent user experience.'
      />
    </Container>
  );
};

interface JobExperienceProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
}

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;
const JobTitleCompanyContainer = styled.div`
  display: flex;
  align-items: center;
`;
const JobTitle = styled(Typography)`
  font-size: 1.5em;
  margin: 0;
`;
JobTitle.defaultProps = {
  variant: 'h3',
};

const Company = styled(Typography)`
  margin: 0;
  padding-left: 32px !important;
`;
Company.defaultProps = {
  variant: 'h4',
  color: Colors.monoGrayThree,
};

const DurationLocationContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Duration = styled(Typography)`
  padding-left: 0px !important;
`;
Duration.defaultProps = {
  variant: 'h4',
  color: Colors.monoBlack,
};

const Location = styled(Typography)``;
Location.defaultProps = {
  variant: 'h4',
  color: Colors.monoGrayThree,
};

const JobDescription = styled(Typography)``;
JobDescription.defaultProps = {
  variant: 'p',
  color: Colors.monoBlack,
};

const JobExperience: React.FC<JobExperienceProps> = ({
  title,
  company,
  duration,
  location,
  description,
}) => {
  return (
    <JobContainer>
      <JobTitleCompanyContainer>
        <JobTitle>{title}</JobTitle>
        <Company>{company}</Company>
      </JobTitleCompanyContainer>
      <DurationLocationContainer>
        <Duration>{duration}</Duration>
        <Location>{location}</Location>
      </DurationLocationContainer>
      <JobDescription>{description}</JobDescription>
    </JobContainer>
  );
};

export default Experience;
