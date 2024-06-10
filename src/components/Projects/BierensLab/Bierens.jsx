import React from "react";
import AboutBierens from './AboutBierens'
import BackgroundCanvas from "../../BackgroundCanvas";
import Navigation from "../../Navigation/Navigation";
import HeroBierens from "./HeroBierens";
import { useTranslation } from 'react-i18next';
import Contact from "../../HomeComponents/Contact";

const Bierens = () => {
    const {t} = useTranslation() 

    return(
        <>
    <div className="app-container">
    <Navigation/>
    <HeroBierens description={t("BierensCreatedWith")}/>
    <AboutBierens/>
    <Contact/>
    <BackgroundCanvas />
    </div>
    </>
)

}

export default Bierens;
