import './style/slidebar.css';
import React, { useState, useEffect  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';

function Slidebar() {

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
            <FontAwesomeIcon className="rightArrow" icon={!isSidebarOpen ? faChevronRight : faChevronLeft} />
          </div>
        </div>
      </div>
    );
}

export default Slidebar;