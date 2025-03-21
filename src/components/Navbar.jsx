import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  background: ${props => props.theme.navBackground};
  color: ${props => props.theme.text};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${props => props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  box-shadow: 0 4px 30px ${props => props.theme.isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.theme.isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'};
  backdrop-filter: blur(10px);
  z-index: 999;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1001;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 60%;
    max-width: 300px;
    background: ${props => props.theme.navBackground};
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.textSecondary};
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.text};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ThemeToggle = styled(IconButton)`
  && {
    color: ${props => props.theme.text};
    padding: 8px;
    margin-left: 1rem;
    
    &:hover {
      background: ${props => props.theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    }
  }
`;

const MenuButton = styled(IconButton)`
  && {
    display: none;
    color: ${props => props.theme.text};
    z-index: 1001;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }
`;

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavWrapper>
      <NavContainer>
        <Logo>DR.</Logo>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink href="#resume" onClick={closeMenu}>Resume</NavLink>
          <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          <ThemeToggle onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </ThemeToggle>
        </NavLinks>
        <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
      </NavContainer>
    </NavWrapper>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar; 