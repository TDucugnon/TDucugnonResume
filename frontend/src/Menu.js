import './style/menu.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


function Menu() {
    const { t, i18n } = useTranslation();

    return (
        <div className="menu">
            <div className='menuTitle'>
                {t('menu.menuTitle')}
                <FontAwesomeIcon className='menuIcon' icon={faMagnifyingGlass} />
            </div>
            <ul className='listItemMenu'>
                <Link to="profileContainer" spy={true} smooth={true} duration={400} offset={-140} activeClass="activeMenuItem">
                    <li>
                        <FontAwesomeIcon className='menuRightArrow' icon={faChevronRight} />
                        {t('profile.profile')}
                        <FontAwesomeIcon className='menuIcon' icon={faUser} />
                    </li>
                </Link>
                <Link to="educationContainer" spy={true} smooth={true} duration={400} offset={-140} activeClass="activeMenuItem">
                    <li>
                        <FontAwesomeIcon className='menuRightArrow' icon={faChevronRight} />
                        {t('education.title')}
                        <FontAwesomeIcon className='menuIcon' icon={faUserGraduate} />
                    </li>
                </Link>
                <Link to="skillContainer" spy={true} smooth={true} duration={400} offset={-140} activeClass="activeMenuItem">
                    <li>
                        <FontAwesomeIcon className='menuRightArrow' icon={faChevronRight} />
                        {t('skills.title')}
                        <FontAwesomeIcon className='menuIcon' icon={faCode} />
                    </li>
                </Link>
                <Link to="workExperienceContainer" spy={true} smooth={true} duration={400} offset={-140} activeClass="activeMenuItem">
                    <li>
                        <FontAwesomeIcon className='menuRightArrow' icon={faChevronRight} />
                        {t('experience.title')}
                        <FontAwesomeIcon className='menuIcon' icon={faBriefcase} />
                    </li>
                </Link>
                <Link to="contactContainer" spy={true} smooth={true} duration={400} offset={-140} activeClass="activeMenuItem">
                    <li>
                        <FontAwesomeIcon className='menuRightArrow' icon={faChevronRight} />
                        {t('contact.title')}
                        <FontAwesomeIcon className='menuIcon' icon={faMessage} />
                    </li>
                </Link>
            </ul>
            <div className='copyright'>
                {t('menu.copyright')}
            </div>
        </div>
    );
}

export default Menu;