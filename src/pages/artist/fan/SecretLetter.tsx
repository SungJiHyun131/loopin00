import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import FanLetterHeader from '../../../components/FanLetterHeader';
import bgtop from '../../../assets/img/IllitHomeimg/postimg/bgt.png';
import './FanLetter.css';
import clip from '../../../assets/img/Fanimg/clip.png';
import photo from '../../../assets/img/Fanimg/photo.png';

const SecretLetter = () => {
  const [text, setText] = useState('');
  const [isSecret, setIsSecret] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  }, [location.state]);

  const handleBack = () => {
    if (text.length > 0) {
      setIsModalOpen(true);
    } else {
      window.history.back();
    }
  };

  const handleSave = () => {
    navigate('/FanHome', { state: { showToast: true } });
  };

  return (
    <div>
      {showToast && <div className="fan-toast">📩 임시 저장 완료!</div>}

      <div className="fanletterbg">
        <img src={bgtop} alt="" />
      </div>

      <div className="FanLetterHeader">
        <FanLetterHeader isActive={text.length > 0} onBack={handleBack} />
      </div>

      <div className="FanLetterContent">
        <textarea
          placeholder="루핀에 남겨보세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="fanletter-toolbar">
          <div className="fanicons">
            <button className="fan-icon-btn">
              <img src={photo} alt="사진 첨부" />
            </button>
            <button className="fan-icon-btn">
              <img src={clip} alt="파일 첨부" />
            </button>
          </div>

          <div className="secret-toggle">
            <span style={{ color: isSecret ? '#d8b4f8' : '#999' }}>비밀 레터</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={isSecret}
                onChange={() => setIsSecret(!isSecret)}
              />
              <span className="fan-slider"></span>
            </label>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p className='real'>이대로 나가면... 진짜 안녕이야? 🥺</p>
            <span className='hey'>
              저장해두면 나중에 이어서 쓸 수 있어!
              <br />
              (너의 마음 아직 다 못 전했잖아...!)
            </span>
            <div className="modal-buttons">
              <button onClick={() => window.history.back()}>나갈래</button>
              <button onClick={handleSave} className='letter-save'>저장할래</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretLetter;
