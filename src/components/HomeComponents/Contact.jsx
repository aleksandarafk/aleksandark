import Marquee from "../Marquee/Marquee"
import { FaLinkedin, FaGithub, FaBehanceSquare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function Contact() {
  const currentYear = new Date().getFullYear();
  const {t} = useTranslation();
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const emailRef = useRef(null);
  const beehanceRef = useRef(null);
  const linkedinAudioRef = useRef(null);
  const githubAudioRef = useRef(null);
  const emailAudioRef = useRef(null);
  const beehanceAudioRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = (audioRef) => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1;
        audioRef.current.play().catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
    };

    const linkedinElement = linkedinRef.current;
    const githubElement = githubRef.current;
    const beehanceElement = beehanceRef.current;
    const emailElement = emailRef.current;

    if (linkedinElement) {
      linkedinElement.addEventListener('mouseenter', () => handleMouseEnter(linkedinAudioRef));
    }
    if (githubElement) {
      githubElement.addEventListener('mouseenter', () => handleMouseEnter(githubAudioRef));
    }
    if (beehanceElement) {
      beehanceElement.addEventListener('mouseenter', () => handleMouseEnter(beehanceAudioRef));
    }
    if (emailElement) {
      emailElement.addEventListener('mouseenter', () => handleMouseEnter(emailAudioRef));
    }

    return () => {
      if (linkedinElement) {
        linkedinElement.removeEventListener('mouseenter', () => handleMouseEnter(linkedinAudioRef));
      }
      if (githubElement) {
        githubElement.removeEventListener('mouseenter', () => handleMouseEnter(githubAudioRef));
      }
      if (beehanceElement) {
        beehanceElement.removeEventListener('mouseenter', () => handleMouseEnter(beehanceAudioRef));
      }
      if (emailElement) {
        emailElement.removeEventListener('mouseenter', () => handleMouseEnter(emailAudioRef));
      }
    };
  }, []);
  const translatedContent = [t("Contact"), t("Contact"), t("Contact"), t("Contact")];


  return (
    <>
      <section id="contact">
        <div className="contact">
          <Marquee content={translatedContent} backgroundColor="#F5510F" duration={80}/>
          <div className="about">
            <div className="about-container">
              <div className="about-desc">
                <p>{t("contact.p1")}</p>
                <p>{t("contact.p2")}</p>
              </div>
              <div className="about-icons">
              <a ref={githubRef} target="_blank" href="https://github.com/aleksandarafk">
                <FaGithub size={40} color="#D6BCFA" style={{ marginBottom: '10px' }} />
                <audio ref={githubAudioRef} src="/waiting.wav" />
              </a>
              <a ref={linkedinRef} target="_blank" href="https://www.linkedin.com/in/aleksandarkaramirev/">
                <FaLinkedin size={40} color="#D6BCFA" style={{ marginBottom: '10px' }} />
                <audio ref={linkedinAudioRef} src="/waiting.wav" />
              </a>
              <a ref={beehanceRef} target="_blank" href="https://www.behance.net/aleksandarkaramirev">
                <FaBehanceSquare size={40} color="#D6BCFA" style={{ marginBottom: '10px' }} />
                <audio ref={beehanceAudioRef} src="/waiting.wav" />
              </a>
              <a ref={emailRef} href="mailto:aleksandarn314@gmail.com">
                <IoSend size={40} color="#D6BCFA" style={{ marginBottom: '10px' }} />
                <audio ref={emailAudioRef} src="/waiting.wav" />
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>
      <footer style={{textAlign: 'center', color: 'white', fontSize: '.75rem'}}>
        <p>{t("contact.footer")} {currentYear}</p>
      </footer>
    </>
  );
}
export default Contact
