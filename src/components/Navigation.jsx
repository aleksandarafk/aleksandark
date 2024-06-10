import React, { useRef, useEffect, useState } from 'react';
import './Navigation.css'; // Import the CSS file
import TranslationBTN from './translationbtn';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from "react-router-dom";



const Navigation = () => {
  const tiltRef = useRef(null);
  const projectAudioRef = useRef(null);
  const aboutAudioRef = useRef(null);
  const contactAudioRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const logoAudioRef = useRef(null);
  const {t} = useTranslation() 
  const currentLocation = useLocation().pathname;



  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseEnter = (audioRef) => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1;
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
    };

    const tiltElement = tiltRef.current;
    const projectElement = projectRef.current;
    const aboutElement = aboutRef.current;
    const contactElement = contactRef.current;

    if (tiltElement) {
      tiltElement.addEventListener('mouseenter', () => handleMouseEnter(logoAudioRef));
    }
    if (projectElement) {
      projectElement.addEventListener('mouseenter', () => handleMouseEnter(projectAudioRef));
    }
    if (aboutElement) {
      aboutElement.addEventListener('mouseenter', () => handleMouseEnter(aboutAudioRef));
    }
    if (contactElement) {
      contactElement.addEventListener('mouseenter', () => handleMouseEnter(contactAudioRef));
    }

    return () => {
      if (tiltElement) {
        tiltElement.removeEventListener('mouseenter', () => handleMouseEnter(logoAudioRef));
      }
      if (projectElement) {
        projectElement.removeEventListener('mouseenter', () => handleMouseEnter(projectAudioRef));
      }
      if (aboutElement) {
        aboutElement.removeEventListener('mouseenter', () => handleMouseEnter(aboutAudioRef));
      }
      if (contactElement) {
        contactElement.removeEventListener('mouseenter', () => handleMouseEnter(contactAudioRef));
      }
    };
  }, []);

  return (
<nav className="nav">
  <div className='tilt' ref={tiltRef}>
    {/* Logo */}
    <Link to="/" state="/" style={{textDecoration:'none', color:'white'}}> <img src="LOGO.svg" alt="Logo" className="logo"/></Link>
    <audio ref={logoAudioRef} src="/judgement.wav" />
  </div>
{currentLocation === "/" ?
      <ul className="menu">
          <li ref={projectRef} className="menuItem"> <Link to="#projects" state="projects" style={{textDecoration:'none', color:'white'}}>{t("Projects")}</Link> 
          <audio ref={projectAudioRef} src="/go.wav" />
          </li>
          <li ref={aboutRef} className="menuItem" > <Link to="#about" state="about" style={{textDecoration:'none', color:'white'}}>{t("About")}</Link>
          <audio ref={aboutAudioRef} src="/go.wav" />
          </li>
          <li ref={contactRef} className="menuItem" > <Link to="#contact" state="contact" style={{textDecoration:'none', color:'white'}}>{t("Contact")} </Link> 
          <audio ref={contactAudioRef} src="/go.wav" />
          </li>
            </ul>
          : <ul className="menu"> <li ref={projectRef} className="menuItem"> <Link to="/" state="projects" style={{textDecoration:'none', color:'white'}}>{t("Projects")}</Link> 
          <audio ref={projectAudioRef} src="/go.wav" />
          </li>
          <li ref={aboutRef} className="menuItem" > <Link to="/" state="about" style={{textDecoration:'none', color:'white'}}>{t("About")}</Link>
          <audio ref={aboutAudioRef} src="/go.wav" />
          </li>
          <li ref={contactRef} className="menuItem" > <Link to="/" state="contact" style={{textDecoration:'none', color:'white'}}>{t("Contact")}</Link> 
          <audio ref={contactAudioRef} src="/go.wav" />
          </li>
    </ul> }
  <div className="buttonContainer">
      <TranslationBTN/>
  </div>
</nav>
  );
};

export default Navigation;
