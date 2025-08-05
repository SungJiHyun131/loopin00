import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FanLetterHeader from '../../../components/FanLetterHeader';
import bgtop from '../../../assets/img/IllitHomeimg/postimg/bgt.png';
import './FanLetter.css';
import clip from '../../../assets/img/Fanimg/clip.png';
import photo from '../../../assets/img/Fanimg/photo.png';

const FanLetter: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if ((location.state as { showToast?: boolean })?.showToast) {
      setShowToast(true);
      const timer = setTimeout(() => setShowToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleBack = (): void => {
    if (text.length > 0) {
      setIsModalOpen(true);
    } else {
      window.history.back();
    }
  };

  const handleSave = (): void => {
    navigate('/FanHome', { state: { showToast: true } });
  };

  return (
    <div>
      {showToast && <div className="toast">📩 임시 저장 완료!</div>}

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
              <img src={photo} alt="photo" />
            </button>
            <button className="fan-icon-btn">
              <img src={clip} alt="clip" />
            </button>
          </div>

          <div className="secret-toggle">
           
            <span className="secret-letter-text" style={{ color: isSecret ? '#d8b4f8' : '#999' }}>비밀 레터</span>
           
            <label className="switch">
            <span className="red-dot"></span>
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
            <p className="real">이대로 나가면... 진짜 안녕이야? 🥺</p>
            <span className="hey">
              저장해두면 나중에 이어서 쓸 수 있어!
              <br />
              (너의 마음 아직 다 못 전했잖아...!)
            </span>
            <div className="modal-buttons">
              <button onClick={() => window.history.back()}>나갈래</button>
              <button onClick={handleSave} className="letter-save">
                저장할래
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FanLetter;
