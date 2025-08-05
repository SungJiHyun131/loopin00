import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import MediaHeader from '../../../components/MediaHeader';
import './Media.css';
import headerbg from '../../../assets/img/IllitHomeimg/mediaimg/bgheader-media.png';
import bg from '../../../assets/img/IllitHomeimg/mediaimg/bg-media.png';

const MediaHome: React.FC = () => {
  const location = useLocation();

  // 현재 경로가 MediaB 포함하면 1, 아니면 0 반환
  const getIndex = (): number => {
    if (location.pathname.includes('MediaB')) return 1;
    return 0;
  };

  return (
    <div className="MediaContainer">
      <div className="Media-headerbg">
        <img src={headerbg} alt="" />
        <div className="MediaHeader">
          <MediaHeader />
          <div className="toggle-container">
            <div
              className="toggle-bg"
              style={{
                left: getIndex() === 1 ? 'calc(50%)' : undefined,
                right: getIndex() === 0 ? 'calc(0% - 1px)' : undefined,
              }}
            />
            <Link to="MediaA" className="toggle-btn">홈</Link>
            <Link to="MediaB" className="toggle-btn">전체<span className="red-dot"></span></Link>
          </div>
        </div>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div className="Media-bg">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default MediaHome;
