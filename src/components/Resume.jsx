import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ResumeSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 40px;
    height: 4px;
    background: ${props => props.theme.gradient};
  }
`;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CompanyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const CompanyItem = styled.div`
  color: ${props => props.active ? props.theme.text : props.theme.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.2s ease;
  position: relative;
  padding-left: 1rem;

  ${props => props.active && `
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background: ${props.theme.gradient};
    }
  `}

  @media (max-width: 768px) {
    white-space: nowrap;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background: ${props => props.active ? props.theme.gradient : 'transparent'};
    color: ${props => props.active ? '#fff' : props.theme.textSecondary};

    &:before {
      display: none;
    }
  }
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceEntry = styled(motion.div)`
  margin-bottom: 3rem;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CompanyInfo = styled.div`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 1rem;
`;

const DateRange = styled.div`
  color: ${props => props.theme.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const BulletPoints = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    color: ${props => props.theme.textSecondary};
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    line-height: 1.6;

    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.primary};
    }

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 0.8rem;
    }
  }
`;

const EducationSection = styled.div`
  margin-top: 6rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const EducationEntry = styled(motion.div)`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Institution = styled.div`
  color: ${props => props.theme.textSecondary};
  margin-bottom: 0.5rem;
`;

const Resume = () => {
  const [activeCompany, setActiveCompany] = useState('Selfbook');
  
  const experiences = [
    {
      id: 1,
      title: "Software Developer (Remote)",
      company: "Selfbook",
      location: "US • New York",
      date: "Jun 2021 - Present",
      points: [
        "Developing screens and UI components for the web application using React and Tailwind",
        "Fixing UI issues and integrating backend APIs with Redux Saga"
      ]
    },
    {
      id: 2,
      title: "Software Developer (Remote)",
      company: "Wevoz",
      location: "Italy",
      date: "Jun 2021 - Present",
      points: [
        "Developing mobile and web applications using React and React Native.",
        "Developing web scraping tools using Python and Selenium.",
        "Helping with PHP backend tasks and occasionally working with different programming languages.",
        "Consulting on frontend tech stack and integrating multiple external APIs across all platforms."
      ]
    },
    {
      id: 3,
      title: "Frontend Engineer (Contractor)",
      company: "FreeBeings",
      location: "Remote",
      date: "Mar 2021 - Aug 2021",
      points: [
        "Working on web applications and occasionally leading the development team.",
        "Using React and integrating external APIs with the HIVE blockchain."
      ]
    },
    {
      id: 4,
      title: "Frontend Developer (In Office)",
      company: "TDF",
      location: "Algeria",
      date: "Feb 2021 - Mar 2021",
      points: [
        "Make landing pages and web applications collaborating with the back-end engineers of the team.",
        "Convert designs into real world applications and pages using multiple front-end technologies.",
        "Frequently working on e-commerce projects."
      ]
    },
    {
      id: 5,
      title: "Frontend Engineer (Freelance)",
      company: "Upwork",
      location: "Remote",
      date: "May 2021 - Aug 2021",
      points: [
        "Successfully completed numerous frontend jobs and high successful projects for clients which all have 5-star ratings and great feedback as well as a short amount of time which led me to get verified on Upwork with an 100% job success and more than 40$ earnings and top rated badge."
      ]
    },
    {
      id: 6,
      title: "Software Developer (Remote)",
      company: "Shopify",
      location: "Remote",
      date: "Nov 2019 - Mar 2020",
      points: [
        "Worked on various client-side dashboard and payment components from designs and site features using Vue and Next alongside integrating backend APIs."
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor's degree in communication",
      institution: "University of Toronto • Canada",
      date: "2019 - 2021",
      description: [
        "Studied various aspects of communication theory, digital media, and journalism",
        "Participated in multiple research projects focused on digital communication"
      ]
    },
    {
      degree: "Certified Fullstack Web Developer",
      institution: "ETM Ibn Rochd - H2IT • Canada",
      date: "2019 - 2021",
      description: [
        "Completed intensive training in full-stack web development",
        "Developed multiple web applications using modern technologies"
      ]
    }
  ];

  const companies = ["Selfbook", "Wevoz", "FreeBeings", "TDF", "Upwork", "Shopify"];
  const currentExperience = experiences.find(exp => exp.company === activeCompany);

  return (
    <ResumeSection id="resume">
      <SectionTitle>EXPERIENCE</SectionTitle>
      <ExperienceContainer>
        <CompanyList>
          {companies.map((company) => (
            <CompanyItem
              key={company}
              active={activeCompany === company}
              onClick={() => setActiveCompany(company)}
            >
              {company}
            </CompanyItem>
          ))}
        </CompanyList>
        <ExperienceDetails>
          <ExperienceEntry
            key={currentExperience.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <JobTitle>{currentExperience.title}</JobTitle>
            <CompanyInfo>{currentExperience.company} • {currentExperience.location}</CompanyInfo>
            <DateRange>{currentExperience.date}</DateRange>
            <BulletPoints>
              {currentExperience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </BulletPoints>
          </ExperienceEntry>
        </ExperienceDetails>
      </ExperienceContainer>

      <EducationSection>
        <SectionTitle>EDUCATION</SectionTitle>
        {education.map((edu, index) => (
          <EducationEntry
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Degree>{edu.degree}</Degree>
            <Institution>{edu.institution}</Institution>
            <DateRange>{edu.date}</DateRange>
            <BulletPoints>
              {edu.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </BulletPoints>
          </EducationEntry>
        ))}
      </EducationSection>
    </ResumeSection>
  );
};

export default Resume; 