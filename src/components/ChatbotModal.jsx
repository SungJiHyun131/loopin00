import React from 'react';
import './ChatbotModal.css';
import { Link, useNavigate } from 'react-router-dom'; // ✅ useNavigate 추가
import close from '../assets/img/header_close.png';
import talk from '../assets/img/chatbot-talkicon.png';
import ask from '../assets/img/chatbot-ask.png';
import profile from '../assets/img/chatbot-profile.png';
import profile2 from '../assets/img/chatbot-profile2.png';

const ChatbotModal = ({ onClose }) => {
  const navigate = useNavigate(); // ✅ navigator 훅

  const handleClose = () => {
    navigate('/MainHome'); // ✅ MainHome으로 이동
  };

  return (
    <div className="chatbot-modal-overlay" onClick={onClose}>
      <div className="chatbot-modal" onClick={(e) => e.stopPropagation()}>

        <div className="chatbot-header">
          <div className="chatbot-profile">
            <p className="profileImg"><img src={profile2} alt="" /></p>
            <div className="rightText">
              <p className="name">LOOPIN</p>
              <span className='time'> 10:00 ~ 18:00</span>
            </div>
          </div>

          {/* ✅ 닫기 버튼에 handleClose 사용 */}
          <button onClick={handleClose}><img src={close} alt="close" /></button>
        </div>

        <div className="chatbot-body">
          <div className="chatbot-conBox">
            <div className="profile">
              <p className="img"><img src={profile} alt="" /></p>
              <div className="profile-name">
                <p className='name'>LOOPIN</p>
                <p className='intro'>안녕하세요 <br />LOOPIN입니다 💙</p>
              </div>
            </div>
            <button className="askbtn">
              <Link to='/ChatbotView' state={{ from: '/MainHome/chatbot' }}>
                문의하기<img src={ask} alt="" /> <span className="red-dot"></span>
              </Link>
            </button>
            <p className="smallText">몇 분 내 답변 받으실 수 있어요</p>
          </div>
          <p className="using">
            <img src={talk} alt="" style={{ width: "15px" }} />채널톡 이용중
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
