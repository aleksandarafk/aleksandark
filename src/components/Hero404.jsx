import ScrollingElement from './HeroMarquee';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";


function Hero404({ description }) {
  const {t} = useTranslation();
  return (
    <>
    <section id="home">
      <div className="content">
        <ScrollingElement title=':^('/>
        <div className="container main-desc">
        <div className="description">{description}</div>
        <a style={{cursor: "pointer"}} className="btn-bierens">
        <Link to='/' style={{textDecoration:'none', color:'white'}}><span>Home</span></Link>
        </a>
        </div>
      </div>
      </section>
         
</>
  )
}

export default Hero404
