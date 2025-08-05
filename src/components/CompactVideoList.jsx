import React from 'react';
import './CompactVideoList.css';

const CompactVideoList = ({ videos = [] }) => {
  return (
    <div className="compact-video-list">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="compact-video-card"
        >
          <img src={video.thumbnail} alt={video.title} className="compact-thumbnail" />
          <div className="compact-info">
            <p className="compact-title">{video.title}</p>
            <div className="compact-meta">
              <span>{video.date}</span>
              <span>{video.duration}</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CompactVideoList;