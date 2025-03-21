import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  background: ${props => props.theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.2, 1],
          opacity: 1
        }}
        transition={{ 
          duration: 0.8,
          times: [0, 0.6, 1]
        }}
      >
        DR.
      </Logo>
    </LoadingContainer>
  );
};

export default LoadingScreen; 