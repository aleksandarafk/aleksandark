import ScrollingElement from './HeroMarquee';
import React from 'react';
import { useTranslation } from 'react-i18next';


function Hero({ description }) {
  const {t} = useTranslation();
  return (
    <>
    <section id="home">
      <div className="content">
        <ScrollingElement title={t("title")}/>
        <div className="container main-desc">
        <div className="description">{description}</div>
        </div>
      </div>
      </section>
         
</>
  )
}

export default Hero