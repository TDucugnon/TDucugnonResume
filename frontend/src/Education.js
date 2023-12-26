import './style/education.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoLaSalle from './public/images/laSalle.jpg';
import logoIPI from './public/images/logoIpi.png';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Education() {

    const { t, i18n } = useTranslation();

    // refacto
    const [isLearnMoreLaSalleOpen, setIsLearnMoreLaSalleOpen] = useState(false);

    const toggleLearnMoreLaSalle = () => {
        setIsLearnMoreLaSalleOpen(!isLearnMoreLaSalleOpen);
    };

    const [isLearnMoreIPIOpen, setIsLearnMoreIPIOpen] = useState(false);

    const toggleLearnMoreIPI = () => {
        setIsLearnMoreIPIOpen(!isLearnMoreIPIOpen);
    };

    return (
        <div className='container' id='educationContainer'>
            <div className='educationTitle'>
                {t('education.title')}
                <FontAwesomeIcon className='educationIcon' icon={faUserGraduate} />
            </div>
            <div className='educationContent'>
                <div className='learnMore'>
                    <FontAwesomeIcon onClick={toggleLearnMoreLaSalle} className="learnMoreIcon" icon={!isLearnMoreLaSalleOpen ? faChevronRight : faChevronDown} />
                </div>
                <div className='educationDate'>{t('education.laSalle.laSalleDate')}</div>
                <div className='educationSubTitle'>{t('education.laSalle.laSalleTitle')}</div>
                <div className='educationDescription'>{t('education.laSalle.Bac')}</div>
                <div className='educationImg'>
                    <img className='logoLaSalle' src={logoLaSalle} />
                </div>
                <div className={isLearnMoreLaSalleOpen ? 'educationFullDescription' : 'hide'}>
                    {t('education.laSalle.laSalleFullDescription')}
                </div>
            </div>
            <div className='educationContent'>
                <div className='learnMore'>
                    <FontAwesomeIcon onClick={toggleLearnMoreIPI} className="learnMoreIcon" icon={!isLearnMoreIPIOpen ? faChevronRight : faChevronDown} />
                </div>
                <div className='educationDate'>{t('education.IPI.IPIDate')}</div>
                <div className='educationSubTitle'>{t('education.IPI.IPITitle')}</div>
                <div className='educationDescription'>{t('education.IPI.Bachelor')}</div>
                <div className='educationImg'>
                    <img className='logoIPI' src={logoIPI} />
                </div>
                <div className={isLearnMoreIPIOpen ? 'educationFullDescription' : 'hide'}>
                    {t('education.IPI.IPIFullDescription')}
                </div>
            </div>
        </div>
    );
}

export default Education;