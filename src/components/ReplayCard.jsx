import React from 'react';
import './ReplayCard.css';
import playIcon from '../assets/img/IllitHomeimg/Live/replay.png';

const ReplayCard = ({ thumbnail, date, title, subtitle , hashtags }) => {
  return (
    <div className="replay-card">
      <img src={thumbnail} alt="Replay Thumbnail" className="replay-thumbnail" />
      <div className="replay-content">
        <p className="replay-date">{date}</p>
        <p className="replay-title">{title}</p>
        <p className="replay-subtitle">{subtitle}</p>
        <div className="replay-hashtags">
          {hashtags.map((tag, index) => (
            <span key={index} className="replay-tag">#{tag}</span>
          ))}
        </div>
      </div>
      <img src={playIcon} alt="Play" className="replay-play-icon" />
    </div>
  );
};

export default ReplayCard;
