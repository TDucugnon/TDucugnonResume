import './style/experience.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import logoInteractiv from './public/images/interactiv.jpg';
import anesfLogo from './public/images/anesf.png';
import { differenceInMonths  } from 'date-fns';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Experience() 
{

    const { t, i18n } = useTranslation();
    const experiences = [
        {
            title: t('experience.anesf.experienceTitle'),
            beginDate: new Date('05/04/2021'),
            endingDate: new Date('07/05/2021'),
            role: t('experience.anesf.role'),
            description: t('experience.anesf.description'),
            logo: anesfLogo,
            company: t('experience.anesf.company')
        },
        {
            title: t('experience.interactivInternship.experienceTitle'),
            beginDate: new Date('09/05/2022'),
            endingDate: new Date('03/06/2023'),
            role: t('experience.interactivInternship.role'),
            description: t('experience.interactivInternship.description'),
            logo: logoInteractiv,
            company: t('experience.interactivInternship.company')
        },
        {
            title: t('experience.interactiv.experienceTitle'),
            beginDate: new Date('03/07/2023'),
            endingDate: new Date(),
            role: t('experience.interactiv.role'),
            description: t('experience.interactiv.description'),
            logo: logoInteractiv,
            company: t('experience.interactivInternship.company')
        },
    ];

    experiences.forEach(experience => {
        experience.experienceTime = calculateExperience(experience.beginDate, experience.endingDate, t);
    });

    return (
        <div className='container' id='workExperienceContainer'>
            <div className='experienceContainerTitle'>
                {t('experience.title')}
                <FontAwesomeIcon className='workExperienceIcon' icon={faBriefcase}> </FontAwesomeIcon>
            </div>
            <div className='experienceContent'>
                {experiences.map(experience => (
                    <div className={isCurrentWork(experience.endingDate) ? 'experienceItem currentWork' : 'experienceItem'}> 
                        <div className='experienceTitle'>
                            {experience.title}
                        </div>
                        <div className='experienceDetails'>
                            <div className='companyLogo'>
                                <img className='logoCompany' src={experience.logo} alt="Logo" />
                            </div>
                            <div className='experienceTime'>
                                {experience.experienceTime}
                            </div>
                            <div className='experienceDescription'>
                                {experience.description}
                            </div>
                            <div className='experienceRole'>
                                {experience.role}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


function calculateExperience(beginDate, endingDate, trans) {
    const difference = differenceInMonths(endingDate, beginDate);

    if (difference < 12) {
        return `${difference} ${trans('experience.month')}`;
    } else {
        const years = Math.floor(difference / 12);
        return `${years} ${trans('experience.year')}${years > 1 ? 's' : ''}`;
    }
}

function isCurrentWork(endingDate) {
    const currentDay = new Date();
    return (
        endingDate.getDate() === currentDay.getDate() &&
        endingDate.getMonth() === currentDay.getMonth() &&
        endingDate.getYear() === currentDay.getYear()
    );
}

export default Experience;