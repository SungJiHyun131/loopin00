import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ArtistHeader2 from '../../../components/ArtistHeader2';
import './ArtistProfile.css';
import profile from '../../../assets/img/IllitHomeimg/artistimg/wonhee.png';
import official from '../../../assets/img/IllitHomeimg/artistimg/official-badge.png';
import content from '../../../assets/img/IllitHomeimg/artistimg/bg-artistcontent.png';
import wl from '../../../assets/img/IllitHomeimg/artistimg/wl.png';
import wr from '../../../assets/img/IllitHomeimg/artistimg/wr.png';
import headerbg from '../../../assets/img/IllitHomeimg/artistimg/bg-artistheader.png';

const ArtistProfile: React.FC = () => {
  const location = useLocation();

  const getIndex = (): number => {
    if (location.pathname.includes('ArtistB')) return 1;
    return 0; // 기본 홈
  };

  return (
    <div className='ArtistProfile'>
      <div className="ArtistHeader">
        <ArtistHeader2 />
        <div className="artistheaderbg"><img src={headerbg} alt="" /></div>
      </div>
      <div className="Artistcontent">
        <div className="top-profile">
          <div className="wing">
            <p className="wl">
              <img src={wl} alt="" />
            </p>
            <div className="profile-img"><img src={profile} alt="" /></div>
            <p className="wr">
              <img src={wr} alt="" />
            </p>
          </div>
          <p className="birth">2007.06.26</p>
          <p className="nickname">
            햄보르기니 <img src={official} alt="" style={{ width: 16 }} />
          </p>
          <p className="smalltext">안녕하세요 워니입니다. 잘부탁드려요</p>
        </div>
        <div className="toggle-container">
          <div
            className="toggle-bg"
            style={{
              left: getIndex() === 1 ? `calc(50%)` : undefined,
              right: getIndex() === 0 ? `calc(0% - 1px)` : undefined,
            }}
          />
          <Link to="ArtistA" className="toggle-btn">포스트</Link>
          <Link to="ArtistB" className="toggle-btn">댓글<span className="red-dot"></span></Link>
        </div>
        <div className="container Artist"><Outlet /></div>
      </div>
      <div className="artistbg"><img src={content} alt="" /></div>
    </div>
  );
};

export default ArtistProfile;
