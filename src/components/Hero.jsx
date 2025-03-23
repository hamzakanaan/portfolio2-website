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
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 96px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 2rem;
  display: flex;
  width: fit-content;
  padding: 0.1em 0;

  @media (max-width: 768px) {
    font-size: 72px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const NameLetter = styled.span`
  color: ${props => props.color};
  text-shadow: 0 0 30px ${props => props.color}15;
  transition: color 0.3s ease;
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
  gap: 1.2rem;
  flex-wrap: wrap;

  & > a:first-child {
    margin-right: 0.4rem;
  }
`;

const SocialButton = styled.a`
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.theme.text};
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid transparent;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 8px;
    padding: 1px;
    background: ${props => props.gradient};
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 0, 0, 0.3);
  }

  svg {
    width: 18px;
    height: 18px;
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

  const darleneColors = [
    '#6830E8', // D (deep purple)
    '#7842EA', // a
    '#8854EC', // r
    '#9866EE', // l
    '#A878F0', // e
    '#B88AF2', // n
    '#C89CF4', // e
  ];

  const robertsonColors = [
    '#C89CF4', // R (starts with Darlene's lightest)
    '#B88AF2', // o
    '#A878F0', // b
    '#9866EE', // e
    '#8854EC', // r
    '#7842EA', // t
    '#8E45D8', // s (purple with rose tint)
    '#A548C7', // o (stronger rose-purple)
    '#BC4BB6', // n (vibrant rose-purple)
  ];

  const name = "Darlene Robertson";
  const letters = name.split('').map((letter, index) => {
    if (index < 7) { // Darlene
      return {
        letter,
        color: darleneColors[index]
      };
    } else if (index === 7) { // Space
      return {
        letter,
        color: darleneColors[6]
      };
    } else { // Robertson
      return {
        letter,
        color: robertsonColors[index - 8]
      };
    }
  });

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
        {letters.map((char, index) => (
          <NameLetter 
            key={index} 
            color={char.color}
            style={char.letter === ' ' ? { marginRight: '0.2em' } : {}}
          >
            {char.letter === ' ' ? '\u00A0' : char.letter}
          </NameLetter>
        ))}
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
        <SocialButton 
          href="mailto:contact@example.com"
          gradient="linear-gradient(135deg, #6830E8 0%, #B88AF2 100%)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"/>
          </svg>
          Send an email
        </SocialButton>
        <SocialButton 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          gradient="linear-gradient(135deg, #4B6CB7 0%, #6B8DD6 100%)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
          </svg>
          LinkedIn
        </SocialButton>
        <SocialButton 
          href="https://upwork.com" 
          target="_blank" 
          rel="noopener noreferrer"
          gradient="linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.917 2.37 5.295 5.281 5.295s5.281-2.378 5.281-5.295v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.688 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
          </svg>
          Upwork
        </SocialButton>
        <SocialButton 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          gradient="linear-gradient(135deg, #DD5789 0%, #E97EAD 100%)"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"/>
          </svg>
          Github
        </SocialButton>
      </SocialLinks>
    </HeroContainer>
  );
};

export default Hero; 