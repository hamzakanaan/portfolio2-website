import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  margin-top: 64px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    margin-top: 56px;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: ${props => props.theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 650px;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: ${props => props.theme.textSecondary};

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const SocialButton = styled.a`
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.theme.text};
  background: ${props => props.theme.isDark ? '#111111' : '#f8f9fa'};
  border: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  font-weight: 500;
  
  &:hover {
    background: ${props => props.theme.isDark ? '#1a1a1a' : '#f1f3f5'};
    transform: translateY(-2px);
  }

  span {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    gap: 0.6rem;

    span {
      font-size: 1rem;
    }
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <HeroContainer>
      <Greeting
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        Hey, I'm
      </Greeting>
      <Name
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Darlene Robertson
      </Name>
      <Description
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm a software engineer based in Toronto, Canada and also a communication
        and journalism student. I enjoy creating things that live on the internet,
        whether that be websites, applications, or anything in between. I have been
        freelancing for a year now while studying at the university and I've manage
        to gain a decent amount of experience and valuable knowledge from all
        different kinds of fields throughout my projects/work.
      </Description>
      <SocialLinks>
        <SocialButton href="mailto:contact@example.com">
          <span>📧</span> Send an email
        </SocialButton>
        <SocialButton href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <span>👔</span> LinkedIn
        </SocialButton>
        <SocialButton href="https://upwork.com" target="_blank" rel="noopener noreferrer">
          <span>💼</span> Upwork
        </SocialButton>
        <SocialButton href="https://github.com" target="_blank" rel="noopener noreferrer">
          <span>🐱</span> Github
        </SocialButton>
      </SocialLinks>
    </HeroContainer>
  );
};

export default Hero; 