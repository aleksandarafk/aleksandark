import React from "react";
import AboutExpat from './AboutExpat'
import BackgroundCanvas from "./BackgroundCanvas";
import Navigation from "./Navigation";
import HeroExpat from "./HeroExpat";
import Contact from "./Contact";
import { useTranslation } from 'react-i18next';

const ExpatService = () => {
    const {t} = useTranslation() 

    return(
        <>
    <div className="app-container">
    <Navigation/>
    <HeroExpat description={t("ExpatCreatedWith")}/>
    <AboutExpat/>
    <Contact/>
    <BackgroundCanvas />
    </div>
    </>
)

}

export default ExpatService;
