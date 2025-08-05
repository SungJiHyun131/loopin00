import React from 'react';
import './SelectArtist.css';


const SelectArtist = ({ image, name, isSelected, onClick }) => {
  return (
    <div className={`idol-card ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <div className="idol-image-border-outer">
        <div className="idol-image-border-inner">
          <img src={image} alt={name} className="idol-image" />
        </div>
      </div>
      <p className="idol-name">{name}</p>
    </div>
  );
};

export default SelectArtist