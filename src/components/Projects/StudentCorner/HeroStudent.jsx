import ScrollingElement from '../../Introduction/HeroMarquee';
import React from 'react';
import { useTranslation } from 'react-i18next';


function HeroStudent({ description }) {
  const {t} = useTranslation();
  return (
    <>
    <section id="home">
      <div className="content">
        <ScrollingElement title='STUDE'/>
        <div className="container main-desc">
        <div className="description">{description}</div>
        <a style={{cursor: "pointer"}} className="btn-bierens" href='https://github.com/aleksandarafk/studentcorner' target='_blank'>
          <span>{t('projects.launch')}</span>
        </a>
        </div>
      </div>
      </section>
         
</>
  )
}

export default HeroStudent
