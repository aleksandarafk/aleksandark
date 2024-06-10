import Marquee from "./Marquee"
import Projects from "./ProjectGallery"
import { useTranslation } from 'react-i18next';

function Project() {
  const {t} = useTranslation();
  const translatedContent = [t("Projects"), t("Projects"), t("Projects"), t("Projects")];

  return (
    <>
    <section id="projects">
      <div className="projects">
        <Marquee content={translatedContent} backgroundColor="#FF66CC" duration={80}/>
        <Projects/>
      </div>
      </section>
</>
  )
}

export default Project