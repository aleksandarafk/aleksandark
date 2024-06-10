import Marquee from '../../Marquee/Marquee';
import { useTranslation } from 'react-i18next';
import ExpatImages from './ExpatImages';
function AboutExpat() {

  const {t} = useTranslation();
  const translatedContent = [t("AboutProject"), t("AboutProject"), t("AboutProject"), t("AboutProject")];

  return (
    <>
    <section id="about">
    <Marquee content={translatedContent} backgroundColor="#A476FC" duration={80}/>
    <ExpatImages/>
      <div className="about">
        <div className="about-desc">
        <p>{t("projects.expatservice_parag1")}</p>
        <p>{t("projects.expatservice_parag2")}</p>
          <p>{t("projects.expatservice_parag3")}</p>
          </div>
        </div>
      </section>
</>
  )
}

export default AboutExpat