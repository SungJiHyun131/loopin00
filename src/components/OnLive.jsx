// OnLive.jsx
import React from 'react';
import './OnLive.css';
import liveThumb from '../assets/img/IllitHomeimg/Live/liveimg.png'; // 썸네일 이미지
import minju from '../assets/img/IllitHomeimg/Live/pr1.png';

const liveData = {
  artistName: '민주',
  artistProfile:minju,
  thumbnail: liveThumb,
  title: '📺 [LIVE] 너와 나의 지금 이 순간 with [민주]',
  time: '📅 2025.07.08 (화) | PM 08:00',
  isLive: true,
}

const OnLive = () => {
  return (
    <div className="onlive-section">
      <h2 className="onlive-title"><span className='circle'></span>ON LIVE</h2>

      <div className="onlive-card">
        <div className="thumbnail-wrapper">
          <img className="thumbnail-img" src={liveData.thumbnail} alt={liveData.artistName} />
          {liveData.isLive && <div className="live-label">LIVE</div>}
        </div>

        <div className="onlive-info">
            <div className="out-ring">
            <div className="in-ring">
            <img src={liveData.artistProfile} alt="" className="artist-profile" />
            </div>
            <div className="onlive-badge">LIVE</div>
            </div>
            <div className="onlive-text">
                <p className="onlive-title-text">{liveData.title}</p>
                <p className="onlive-artist-time">{liveData.time}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OnLive