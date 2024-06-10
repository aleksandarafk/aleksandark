import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
//importing the necessary components

//creating the language toggle button components
function TranslationBTN() {
    const {t, i18n} = useTranslation() //implementing use translation in order for the button to work
  
    const onChangeLang = (e)=>{ //declaring a constant that changes the language
      i18n.changeLanguage(e.target.value)
    }
  
    useEffect(()=>{
      for (let index = 0; index < document.getElementsByClassName('lang').length; index++) {
        const element = document.getElementsByClassName('lang')[index];
        if(element.value === i18n.language){
          element.setAttribute("selected", "true")
        }
      }
    })
    return (
       <select className="translationbtn" onChange={onChangeLang}>
        <option  value="en" className="lang">{t('EN')}</option> 
        <option  value="bg" className="lang">{t('BG')}</option>
        </select>
        
    )
}

//exporting the language button components
export default TranslationBTN