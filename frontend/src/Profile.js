import './style/profile.css';
import React, { useState, useEffect } from 'react';
import imgProfile from '../src/public/images/profileImage.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    const { t, i18n } = useTranslation();

    const [showInterest, setShowInterest] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const listHobbies = [
        {hobbie: t('profile.paintball')},
        {hobbie: t('profile.mangas')},
        {hobbie: t('profile.videogame')},
        {hobbie: t('profile.softwareDeveloppement')}
    ]

    const handleLeftClick = () => {
        setIsTransitioning(true);
        setShowInterest(!showInterest);
      };
    
    const handleRightClick = () => {
        setIsTransitioning(true);
        setShowInterest(!showInterest);
    };

    useEffect(() => {
        const transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
    
        return () => clearTimeout(transitionTimeout);
    }, [showInterest]);

    return(
        <div className='container' id='profileContainer'>
            <div className='profileTitle'>
                {t('profile.title')}
            </div>
            <div class="profileSubTitle">
                {t('profile.subtitle')}
            </div>
            <div className='profileContent'>
                <div className='imageContainer'>
                    <div className='imageProfile'>
                        <img className='profile' src={imgProfile}></img>
                    </div>
                </div>
                <div className='separatorContainer'>
                    <div className='separator'></div>
                </div>
                <div className={'textContainer'}>
                    <div className='goLeft' onClick={handleLeftClick}>
                        <FontAwesomeIcon className='goLeftArrow' icon={faChevronLeft}/>
                    </div>
                    {
                        showInterest ? (
                            <div className={`textProfile ${isTransitioning ? 'transitioning' : ''}`}>
                                {t('profile.profileText')}
                            </div>
                        ) : (
                            <div className={`textProfile ${isTransitioning ? 'transitioning' : ''}`}>
                                <div className='textTitle'>
                                    {t('profile.hobbies')} :
                                    {listHobbies.map(hobbies => (
                                        <div className='textContent' key={hobbies.id}>
                                            - {hobbies.hobbie}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    }
                    <div className='goRight' onClick={handleRightClick}>
                        <FontAwesomeIcon className='goRightArrow' icon={faChevronRight}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;