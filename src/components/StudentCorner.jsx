import React from "react";
import AboutStudent from './AboutStudent'
import BackgroundCanvas from "./BackgroundCanvas";
import Navigation from "./Navigation";
import HeroStudent from "./HeroStudent";
import Contact from "./Contact";
import { useTranslation } from 'react-i18next';

const StudentCorner = () => {
    const {t} = useTranslation() 

    return(
        <>
    <div className="app-container">
    <Navigation/>
    <HeroStudent description={t("StudentCornerCreatedWith")}/>
    <AboutStudent/>
    <Contact/>
    <BackgroundCanvas />
    </div>
    </>
)

}

export default StudentCorner;
