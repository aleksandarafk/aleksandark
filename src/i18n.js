import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
//importing neccessary components

//this file is created in order to set up initial website language and for implementing the translation
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

//exporting the component - it is applied in the root
export default i18n;