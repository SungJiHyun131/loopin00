import React from 'react'
import './AlbumCard.css'

const AlbumCard = ({ title, date, image }) => {
    return (
      <div className="album-card">
        <div className="album-image">
          <img src={image} alt={title} />
        </div>
        <p className="album-title">{title}</p>
        <p className="album-date">{date}</p>
      </div>
    );
  };
  

export default AlbumCard