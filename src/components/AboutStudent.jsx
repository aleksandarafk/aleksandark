import Marquee from './Marquee';
import { useTranslation } from 'react-i18next';
import SCImages from './SCImages';
function AboutStudent() {

  const {t} = useTranslation();
  const translatedContent = [t("AboutProject"), t("AboutProject"), t("AboutProject"), t("AboutProject")];

  return (
    <>
    <section id="about">
    <Marquee content={translatedContent} backgroundColor="#A476FC" duration={80}/>
    <SCImages/>
      <div className="about">
        <div className="about-desc">
        <p>{t("projects.studentcorner_parag1")}</p>
        <p>{t("projects.studentcorner_parag2")}</p>
        <p>{t("projects.studentcorner_parag3")}</p>
        <p>{t("projects.studentcorner_parag4")}</p>
          </div>
        </div>
      </section>
</>
  )
}

export default AboutStudent