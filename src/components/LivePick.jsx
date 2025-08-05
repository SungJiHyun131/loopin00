import React from 'react';
import './LivePick.css';
import thum1 from '../assets/img/IllitHomeimg/Live/thum1.png';
import thum2 from '../assets/img/IllitHomeimg/Live/thum2.png';
import thum3 from '../assets/img/IllitHomeimg/Live/thum3.png';
import wonhee from '../assets/img/IllitHomeimg/Live/pr2.png';
import roha from '../assets/img/IllitHomeimg/Live/pr5.png';
import minju from '../assets/img/IllitHomeimg/Live/pr1.png';

const livePicks = [
  {
    id: 1,
    thumbnail: thum1,
    duration: '23:06',
    title: '🅸🅻🅻🅸🆃 원희의 가장 짧은 라방',
    artist: '원희',
    date: '2025.03.08 (수) | PM 09:00',
    profile: wonhee,
  },
  {
    id: 2,
    thumbnail: thum2,
    duration: '22:56',
    title: '이로하의 세상',
    artist: '이로하',
    date: '2025.02.01 (목) | PM 05:00',
    profile: roha,
  },
  {
    id: 3,
    thumbnail: thum3,
    duration: '23:06',
    title: 'TMI 대방출🤍',
    artist: '민주',
    date: '2025.01.08 (월) | PM 03:30',
    profile: minju,
  },
];

const LivePick = () => {
  return (
    <div className="livepick-section">
      <h3 className="livepick subtitle">LIVE Picks</h3>
      <div className="livepick-card-wrapper">
        {livePicks.map((pick) => (
          <div key={pick.id} className="livepick-card">
            <div className="livepick-thumbnail">
              <img src={pick.thumbnail} alt={pick.title} />
              <div className="livepick-duration">{pick.duration}</div>
            </div>
            <div className="livepick-description">
                <div className="outring">
                    <div className="inring">
                        <img src={pick.profile} alt={pick.artist} className="livepick-profile" />
                    </div>
                </div>
                <div className="livepick-footer">
                    <p className="title">{pick.title}</p> 
                    <p className="livepick-date">{pick.date}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePick;
