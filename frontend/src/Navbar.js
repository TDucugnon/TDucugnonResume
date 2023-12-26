import './style/navbar.css';
import logoFrance from './public/images/icons-france-48.png';
import logoBritish from './public/images/icons-great-britain-48.png';
import CVFR from './public/fichier/DUCUGNON Thomas CV FR.pdf';
import CVEN from './public/fichier/DUCUGNON Thomas CV EN.pdf';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="header">
            <div className="navbar">
                <div className="navigation">
                    <a href={i18n.language === 'fr' ? CVFR : CVEN} download><span> {t('navbar.downloadResume')} </span></a>
                    <img className={`fr clickable ${i18n.language === 'fr' || i18n.language === 'fr-FR' ? '' : 'flagOpacity'}`} src={logoFrance} onClick={() => changeLanguage('fr')} alt="France"/>
                    <img className={`en clickable ${i18n.language === 'en' || i18n.language === 'en-EN' ? '' : 'flagOpacity'}`} src={logoBritish} onClick={() => changeLanguage('en')} alt="English"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;