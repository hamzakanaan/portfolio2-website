import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.jsx';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Separator from './components/Separator.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

const lightTheme = {
  background: '#ffffff',
  secondaryBg: '#f8f9fa',
  navBackground: '#ffffff',
  text: '#000000',
  textSecondary: '#6c757d',
  primary: '#64B5F6',
  border: '#dee2e6',
  gradient: 'linear-gradient(45deg, #4B9FE1, #56D5BB)',
  buttonPrimary: '#111111',
  buttonPrimaryHover: '#2a2a2a',
  buttonSecondaryHover: '#f1f3f5',
  card: '#ffffff',
  isDark: false
};

const darkTheme = {
  background: '#000000',
  secondaryBg: '#111111',
  navBackground: '#000000',
  text: '#ffffff',
  textSecondary: '#9ca3af',
  primary: '#64B5F6',
  border: '#222222',
  gradient: 'linear-gradient(45deg, #4B9FE1, #56D5BB)',
  buttonPrimary: '#ffffff',
  buttonPrimaryHover: '#e6e6e6',
  buttonSecondaryHover: '#1a1a1a',
  card: '#111111',
  isDark: true
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <>
            <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Hero />
            <Separator />
            <Projects />
            <Separator />
            <Resume />
            <Separator />
            <Contact />
            <ScrollToTop />
          </>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
};

export default App;
