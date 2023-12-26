import './style/CustomTooltip.css';
import React, { useState } from 'react';

function CustomTooltip({ text, children }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="custom-tooltip" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && <div className="tooltip-text">{text}</div>}
    </div>
  );
}

export default CustomTooltip;
