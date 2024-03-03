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
        description='As a Software Engineer at SupplyPike, I developed intuitive interfaces that reduced project completion times by 30% and increased user adoption by 15%. My contributions in front-end development and cross-functional UX/UI design integrations led to a 40% boost in user engagement, while my automated workflow solutions saved 50 hours per month, enhancing customer satisfaction and expediting product development.'
      />
      <JobExperience
        title='UI/UX Designer'
        company='SupplyPike'
        duration='01/2017 - 05/2018'
        location='Fayetteville Arkansas'
        description='As a UI/UX Designer at SupplyPike, I spearheaded the development of compelling user interfaces, advancing team efficiency and user satisfaction. Collaborating with a five-member development team, I ensured the seamless implementation of responsive designs. My efforts in standardizing design elements solidified a unified user experience, while my translation of user feedback into design enhancements significantly contributed to product refinement. I was actively involved in strategic discussions with senior leaders, aiding in informed decision-making and problem resolution.'
      />
      <JobExperience
        title='Web Developer - Team Lead'
        company='Gearhead'
        duration='04/2014 - 05/2016'
        location='Fayetteville Arkansas'
        description="As the Web Developer Team Lead at Gearhead, I led a transformative redesign that elevated our online sales by an unprecedented 1150% in just three months. My strategic approach to website analytics and content optimization significantly boosted user engagement. I also played a pivotal role in the smooth integration of third-party tools, substantially enhancing the site's functionality and user experience."
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
