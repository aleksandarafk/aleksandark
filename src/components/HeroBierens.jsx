import ScrollingElement from './HeroMarquee';
import React from 'react';
import { useTranslation } from 'react-i18next';


function HeroBierens({ description }) {
  const {t} = useTranslation();
  return (
    <>
    <section id="home">
      <div className="content">
        <ScrollingElement title='BIERE'/>
        <div className="container main-desc">
        <div className="description">{description}</div>
        <a style={{cursor: "pointer"}} className="btn-bierens" href='https://www.behance.net/aleksandarkaramirev' target='_blank'>
          <span>{t('projects.launch')}</span>
        </a>
        </div>
      </div>
      </section>
         
</>
  )
}

export default HeroBierens
