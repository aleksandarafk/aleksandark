import { useTranslation } from 'react-i18next';
import BackgroundCanvas from './BackgroundCanvas';
import Hero404 from "./Hero404";

function NotFound() {

  const {t} = useTranslation();

  return (
    <>
    <div className="app-container">
    <Hero404 description={"Oops! You seem to be lost. Go back to the beginning:"}/>
    <BackgroundCanvas />
    </div>
    </>
  )
}

export default NotFound