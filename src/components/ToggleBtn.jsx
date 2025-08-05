import React, { useState } from 'react';
import './ToggleBtn.css';

const ToggleBtn = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="toggle-container">
    <div
      className="toggle-bg"
      style={{
        width: `calc(${100 / items.length}% - 2px)`,
        left: `calc(${(100 / items.length) * activeIndex}% + 1px)`
      }}
    />
    {items.map((item, idx) => (
      <button
        key={idx}
        className={`toggle-btn 
                    ${idx === 0 ? 'left' : ''} 
                    ${idx === items.length - 1 ? 'right' : ''}`}
        onClick={() => setActiveIndex(idx)}
      >
        {item}
      </button>
    ))}
  </div>
  );
};

export default ToggleBtn;