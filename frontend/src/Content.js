import Profile from './Profile';
import Education from './Education';
import Skills from './Skills';
import './style/content.css';
import React from 'react';
import Experience from './Experience';
import Contact from './Contact';

function Content() {

    return(
        <div className='content'>
            <Profile></Profile>
            <Experience></Experience>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>
            <div className='footerDiv'></div>
        </div>
    );
}

export default Content;