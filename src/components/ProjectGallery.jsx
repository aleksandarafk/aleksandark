import React, { useState, useEffect } from 'react';
import "./ProjectGallery.css";
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import $ from 'jquery';

const Projects = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Code that runs on pageload
    gsap.to(".load_grid-item", {
      opacity: 0,
      duration: 0.001,
      stagger: { amount: 0.5, from: "random" },
      onComplete: () => {
        gsap.set(".load_grid", { display: "none" });
      }
    });

    // On click of the back button
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload();
      }
    };
  }, []);

  const launchPage = (url) => {
    gsap.set(".load_grid", { display: "grid" });
    gsap.fromTo(
      ".load_grid-item",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.001,
        stagger: { amount: 0.5, from: "random" },
        onComplete: () => {
          window.location.href = url;
        }
      }
    );
  };

  const handleClick = (e) => {
    if (
      $(e.currentTarget).prop("hostname") === window.location.host &&
      $(e.currentTarget).attr("href").indexOf("#") === -1 &&
      $(e.currentTarget).attr("target") !== "_blank"
    ) {
      e.preventDefault();
      let destination = $(e.currentTarget).attr("href");
      launchPage(destination);
    }
  };

  useEffect(() => {
    $("a").on("click", handleClick);
    return () => {
      $("a").off("click", handleClick);
    };
  }, []);

  const projectData = [
    {
      image: "studentcorner.png",
      client: t("projects.studentcorner"),
      type:  t("projects.type_fed"),
      projecttype: t("projects.project_stdcrn"),
      year: "2021",
      url: "/studentcorner",
    },
    {
      image: "expatservice.png",
      client: t("projects.expatservice"),
      type: "UX & UI",
      projecttype: t("projects.project_expt"),
      year: "2023",
      url: "/expatservice",
    },
    {
      image: "bierensgroup.png",
      client: t("projects.bierens"),
      type:   t("projects.type_fed"),
      projecttype: t("projects.project_bierens"),
      year: "2024",
      url: "/bierens",
    },
  ];  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(true);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setOverlayVisible(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredProjectIndex(index);
    setOverlayVisible(true);  // Make overlay visible when hovering on a project
  };

  const handleMouseLeave = () => {
    setHoveredProjectIndex(null);
    setOverlayVisible(false);  // Hide overlay when not hovering on a project
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleButtonHover = () => {
    setShowImage(false);
  };

  const handleButtonLeave = () => {
    setShowImage(true);
  };

  return (
    <>
      <div className="preview">
        {showImage && <div className="preview-img"></div>}
      </div>
      <div className={`overlay ${overlayVisible ? 'visible' : ''}`}></div>
      <div className="load_grid">
          {[...Array(500)].map((_, index) => (
            <div key={index} className="load_grid-item"></div>
          ))}
      </div>
      <div className="projectcontainer">
        <div className="projects">
          <div
            className="project-section"
            onMouseMove={handleMouseMove}
            id="projects"
          >
            {projectData.map((project, index) => (
              <div
                className={`project image-hover ${hoveredProjectIndex === index ? 'on-top' : ''}`}
                key={index}
                style={{ "--i": index }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="client">
                  <p>{project.client}</p>
                </div>
                <div className="type">
                  <p>{project.projecttype}</p>
                </div>
                <div className="service">
                  <p>{project.project}</p>
                </div>
                <div className="year">
                  <p>{project.year}</p>
                </div>
                {showImage && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      top: `${mousePosition.y}px`,
                      left: `${mousePosition.x}px`,
                      transform: `translate(-50%, -50%)`,
                    }}
                  />
                )}
                <a
                  onClick={() => launchPage(project.url)}
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                  style={{ cursor: "pointer" }}
                  className="btn-23"
                >
                  <span className="marquee" aria-hidden>{t('projects.launch')}</span>
                </a>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
