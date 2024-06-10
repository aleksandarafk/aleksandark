import BackgroundCanvas from './components/BackgroundCanvas'
import Hero from './components/Introduction/Hero'
import Project from './components/HomeComponents/Project'
import About from './components/HomeComponents/About'
import Contact from './components/HomeComponents/Contact'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'
import React, { useEffect,} from 'react' 



function App() {
  const {t} = useTranslation() 
  const locationProps = useLocation().state;
  const currentPath = useLocation().pathname;
  
useEffect(() => {
  console.log(locationProps);
  const Projects = document.getElementById("projects");
  const AboutMe = document.getElementById("about");
  const ContactMe = document.getElementById("contact");

  window.scrollTo(0, 0);

  if (locationProps === "/") {  
    window.scrollTo(0, 0);
  } else if (locationProps === "projects") {
    Projects?.scrollIntoView({  behavior: "smooth", block: "end", inline: "nearest" });
  } else if (locationProps === "about") {
    AboutMe?.scrollIntoView({  behavior: "smooth", block: "end", inline: "nearest" });
  } else if (locationProps === "contact") {
    ContactMe?.scrollIntoView({  behavior: "smooth", block: "end", inline: "nearest" });
  } else {
    window.scrollTo(0, 0);
  }
}, [currentPath, locationProps]);


  return (
    <>
    {currentPath === "/" &&
    <div className="app-container">
      <Navigation/>
          <Hero description={t("InfoBox")}/>
          <Project />
          <About />
          <Contact />
      <BackgroundCanvas />
    </div>}
</>
  )
}

export default App
