import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NoticeHeader from '../../../components/NoticeHeader';
import './NoticeHome.css';
import rightIcon from '../../../assets/img/Icon_right.png';
import bgbottom from '../../../assets/img/bg-bottom.png';
import bgtop from '../../../assets/img/IllitHomeimg/postimg/bgt.png';

const Notice: React.FC = () => {
  const location = useLocation();

  return (
    <div className="noticemain">
      <div className="bg-top"><img src={bgtop} alt="" /></div>
      <div className="NoticeHeader">
        <NoticeHeader />
      </div>
      <div className="container NoticeHome">
        <ul>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[EVENT] 최애가 말아주는 여름 콘텐츠?! 😳🏖️ </h3>
                <p>2025.07.04 <span className="newicon">new</span></p>
              </div>
              <img src={rightIcon} alt="" />
              <span className="red-dot"></span>
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[EVENT] 여름 플레이리스트 챌린지 🌊</h3>
                <p>2025.07.04 <span className="newicon">new</span></p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">
                  [NOTICE] 챌린지 리뉴얼 완료! 덕질미션에서 만나요 <span className="remove-icon">💪🏻</span>
                </h3>
                <p>2025.07.02 <span className="newicon">new</span></p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[EVENT] 7월 이달의 캘꾸 이벤트 🗓️✨</h3>
                <p>2025.07.01</p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[EVENT] 7월 생일 배너 이벤트 🎂 (HBD Banner Event)</h3>
                <p>2025.06.30</p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[EVENT] 6월달 이달의 캘꾸러를 발표합니다 🎉</h3>
                <p>2025.06.30</p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[NOTICE] 아티스트 권익 침해 관련 법적 대응 상황 안내</h3>
                <p>2025.06.30</p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/NoticeDetail">
              <div className="left">
                <h3 className="Notice_tit">[EVENT] 250703 SBS 인기가요 참여 안내 🎈</h3>
                <p>2025.06.29</p>
              </div>
              <img src={rightIcon} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-bottom"><img src={bgbottom} alt="" /></div>
    </div>
  );
};

export default Notice;
