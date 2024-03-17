import './style/sidebar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate, faCode, faBriefcase, faUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function SideBar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
      setIsMenuVisible(false);
    };

    const handleSidebarClick = () => {
      if (!isSidebarOpen) {
        toggleSidebar();
      }
    };

    return (
      <div className="slidebar">
        <div className="fullMenu">
          {isSidebarOpen && <Menu />}
          <div className="sidebar" onMouseEnter={handleSidebarClick} onClick={toggleSidebar}>
            <div className='centeredContainer'>
              <div className={!isSidebarOpen ? 'sideBarIconContainer' : 'hide'}>
                <FontAwesomeIcon className='sideBarIcon' icon={faUser} />
                <FontAwesomeIcon className='sideBarIcon' icon={faBriefcase} />
                <FontAwesomeIcon className='sideBarIcon' icon={faCode} />
                <FontAwesomeIcon className='sideBarIcon' icon={faUserGraduate} />
                <FontAwesomeIcon className='sideBarIcon' icon={faMessage} />
              </div>
              <div className='rightArrowContainer'>
                <FontAwesomeIcon className="rightArrow" icon={!isSidebarOpen ? faChevronRight : faChevronLeft} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SideBar;