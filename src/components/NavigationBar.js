
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Hamburger from 'hamburger-react';
import { useLanguage } from '../context/LanguageContext';
import "../styles/NavigationBar.css";


const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isMobile2 = useMediaQuery({ maxWidth: 450 });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" style={{
      backgroundColor:
        (isHovered || (isMobile && menuOpen)) ? 'rgb(23,20,38)' :
        (isMobile && scrollPosition === 0) ? 'rgba(23,20,38,0.9)' :
        scrollPosition === 0 ? 'transparent' : 'rgba(23,20,38,0.9)'
    }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isMobile ? (
        <div className="nav-bar-items-container">
          {!isMobile2 && <Hamburger
            label="Show menu"
            rounded
            hideOutline={false}
            direction="left"
            size={100}
            color="white"
            duration={0.8}
            toggled={menuOpen}
            toggle={toggleMenu}
          />}
          {isMobile2 && <Hamburger
            label="Show menu"
            rounded
            hideOutline={false}
            direction="left"
            size={30}
            color="white"
            duration={0.8}
            toggled={menuOpen}
            toggle={toggleMenu}
          />}
        </div>
      ) : (
        <div className="logo-container">
        </div>
      )}
      {isMobile && (
        <div className={`mobile-menu-overlay ${menuOpen ? 'visible' : ''}`} onClick={toggleMenu}></div>
      )}
      <ul className={`nav-links ${menuOpen ? 'nav-links-activated' : 'nav-links-deactivated'}`}>
        <div className='nav-links-text'>
          <li><Link to="/" onClick={toggleMenu} className= {(scrollPosition === 0 && !isHovered && !isMobile) ? 'colored' : 'white'}>{t('nav_home')}</Link></li>
          <li><Link to="/products" onClick={toggleMenu} className= {(scrollPosition === 0 && !isHovered && !isMobile) ? 'colored' : 'white'}>{t('nav_products')}</Link></li>
          <li><Link to="/projects" onClick={toggleMenu} className= {(scrollPosition === 0 && !isHovered && !isMobile) ? 'colored' : 'white'}>{t('nav_projects')}</Link></li>
          <li><Link to="/about" onClick={toggleMenu} className= {(scrollPosition === 0 && !isHovered && !isMobile) ? 'colored' : 'white'}>{t('nav_about')}</Link></li>
          <li><Link to="/contact" onClick={toggleMenu} className= {(scrollPosition === 0 && !isHovered && !isMobile) ? 'colored' : 'white'}>{t('nav_contact')}</Link></li>
        </div>
        {/* Language Toggle */}
        <li className="language-toggle">
          <button 
            onClick={toggleLanguage} 
            className="lang-btn"
            title={language === 'gr' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά'}
          >
            {language === 'gr' ? (
              // Greek Flag
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18" className="flag-icon">
                <rect fill="#0D5EAF" width="27" height="18"/>
                <path fill="#FFF" d="M0,2h27v2H0zM0,6h27v2H0zM0,10h27v2H0zM0,14h27v2H0z"/>
                <rect fill="#0D5EAF" width="10" height="10"/>
                <path fill="#FFF" d="M0,4h10v2H0zM4,0h2v10H4z"/>
              </svg>
            ) : (
              // UK Flag
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="flag-icon">
                <rect fill="#012169" width="60" height="30"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)"/>
                <path d="M30,0v30M0,15h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0v30M0,15h60" stroke="#C8102E" strokeWidth="6"/>
              </svg>
            )}
          </button>
        </li>
      </ul>
      {!isMobile && (
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`}></div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
