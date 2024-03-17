import './style/experience.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import logoInteractiv from './public/images/interactiv.jpg';
import anesfLogo from './public/images/anesf.png';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Experience() 
{
    
    const { t, i18n } = useTranslation();
    const experiences = [
        {
            title: t('experience.interactiv.experienceTitle'),
            beginDate: new Date('03/07/2023'),
            endingDate: new Date(),
            role: t('experience.interactiv.role'),
            description: [
                t('experience.interactiv.descriptionDevFullStack'),
                t('experience.interactiv.descriptionPHP'),
                t('experience.interactiv.descriptionCI'),
                t('experience.interactiv.descriptionPIM'),
                t('experience.interactiv.descriptionSupport'),
                t('experience.interactiv.descriptionSpec'),

            ],
            logo: logoInteractiv,
            company: t('experience.interactivInternship.company')
        },
        {
            title: t('experience.interactivInternship.experienceTitle'),
            beginDate: new Date('09/05/2022'),
            endingDate: new Date('03/06/2023'),
            role: t('experience.interactivInternship.role'),
            description: [
                t('experience.interactiv.descriptionDevFullStack'),
                t('experience.interactiv.descriptionPHP'),
                t('experience.interactiv.descriptionCI'),
                t('experience.interactiv.descriptionPIM'),
                t('experience.interactiv.descriptionSupport'),
                t('experience.interactiv.descriptionSpec'),
            ],
            logo: logoInteractiv,
            company: t('experience.interactivInternship.company')
        },
        {
            title: t('experience.anesf.experienceTitle'),
            beginDate: new Date('05/04/2021'),
            endingDate: new Date('07/05/2021'),
            role: t('experience.anesf.role'),
            description: [
                t('experience.anesf.descriptionLaravel')
            ],
            logo: anesfLogo,
        }
    ];

    return (
        <div className='container' id='workExperienceContainer'>
            <div className='experienceContainerTitle'>
                {t('experience.title')}
                <FontAwesomeIcon className='workExperienceIcon' icon={faBriefcase}> </FontAwesomeIcon>
            </div>
            <div className='experienceContent'>
                {experiences.map((element, index) => (
                    displayExperience(element, index, experiences)
                ))}
            </div>
        </div>
    );
}


function formatDate(date) {
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    month = month < 10 ? '0' + month : month;

    return `${month}/${year.toString().slice(-2)}`;
}

function displayExperience(element, index, experiences) {
    let elementOnLeft = index % 2 === 0;
    return (
        <div className='experienceContentContainer'>
            <div className={`displayFlex${elementOnLeft ? 'Left' : 'Right'} experienceElement`}>
                <div className='experience'>
                    <div className='experienceHeader'>
                        <div className='experienceTitle'>
                            <div>
                                {element.title}
                            </div>
                            <div>
                                {element.company}
                            </div>
                        </div>
                        {element.company && (
                            <img className='experienceImage' src={element.logo}></img>
                        )}
                    </div>
                    <div className='experienceDescriptionContainer'>
                        {element.description.map((descriptionIndex) => (
                            <div className='experienceDescription'>
                                <FontAwesomeIcon className='chevronRight' icon={faChevronRight}/>
                                {descriptionIndex}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`verticalBarContainer ${elementOnLeft ? 'left' : 'right'}`}>
                    <div className={`verticalBar ${index === 0 ? 'first' : ''} ${index === experiences.length - 1 ? 'last' : ''}`}></div>
                    <div className='date'>
                        <div>{formatDate(element.endingDate)}</div>
                        <div>-</div>
                        <div>{formatDate(element.beginDate)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;