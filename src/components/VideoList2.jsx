import React from 'react';
import './VideoList2.css'; // 스타일은 여기에 따로 정의한다고 가정
import play from'../assets/img/IllitHomeimg/mediaimg/play.png'
import headphone from'../assets/img/IllitHomeimg/mediaimg/headphone.png'

const VideoList2 = ({ videos = [] }) => {
    return (
      <div className="video-list2">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="video-card"
          >
            <div className="thumbnail-wrapper">
              <img src={video.thumbnail} alt={video.title} className="thumbnail" />
              <div className="duration"><img src={headphone} alt="" />{video.duration}</div>
              <button className="play-button"><img src={play} alt="" /></button>
            </div>
            <div className="video-info">
              <p className="date">{video.date}</p>
              <p className="title">{video.title}</p>
            </div>
          </a>
        ))}
      </div>
    );
  };

export default VideoList2;