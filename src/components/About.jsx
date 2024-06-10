import Marquee from "./Marquee"
import ModelRender from "./ModelEnvironment"
import { useTranslation } from 'react-i18next';

function About() {

  const {t} = useTranslation();
  const translatedContent = [t("about.title"), t("about.title"), t("about.title"), t("about.title")];

  return (
    <>
    <section id="about">
    <Marquee content={translatedContent} backgroundColor="#A476FC" duration={80}/>
    <ModelRender/>
      <div className="about">
        <div className="about-desc">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>
          </div>
        </div>
      </section>
</>
  )
}

export default About