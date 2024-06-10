import Marquee from './Marquee';
import { useTranslation } from 'react-i18next';
import BierensImages from './BierensImages';
function About() {

  const {t} = useTranslation();
  const translatedContent = [t("AboutProject"), t("AboutProject"), t("AboutProject"), t("AboutProject")];

  return (
    <>
    <section id="about">
    <Marquee content={translatedContent} backgroundColor="#A476FC" duration={80}/>
    <BierensImages/>
      <div className="about">
        <div className="about-desc">
        <p>{t("projects.bierens_parag1")}</p>
        <p>{t("projects.bierens_parag2")}</p>
          <p>{t("projects.bierens_parag3")}</p>
          <p>{t("projects.bierens_parag4")}</p>
          </div>
        </div>
      </section>
</>
  )
}

export default About