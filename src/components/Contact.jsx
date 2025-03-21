import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 50vh;
  padding: 6rem 2rem;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -10px;
    width: 40px;
    height: 4px;
    background: ${props => props.theme.gradient};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: ${props => props.theme.isDark ? '#111111' : '#f8f9fa'};
  color: ${props => props.theme.text};
  border: none;

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.theme.isDark ? '#1a1a1a' : '#f1f3f5'};
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.textSecondary};
  margin-top: 4rem;
  font-size: 0.9rem;
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>CONTACT</SectionTitle>
      <SocialLinks>
        <SocialButton href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer">
          📧 Send an email
        </SocialButton>
        <SocialButton href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          👔 LinkedIn
        </SocialButton>
        <SocialButton href="https://upwork.com" target="_blank" rel="noopener noreferrer">
          💼 Upwork
        </SocialButton>
        <SocialButton href="https://github.com" target="_blank" rel="noopener noreferrer">
          🐱 Github
        </SocialButton>
      </SocialLinks>
      <Copyright>© 2024 Darlene Robertson. All rights reserved.</Copyright>
    </ContactSection>
  );
};

export default Contact; 