import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png';
import more from '../assets/img/header_more.png';

interface MyArchiveHeaderProps {
  onDeleteMode: () => void;
  onEditMode: () => void;
}

const MyArchiveHeader: React.FC<MyArchiveHeaderProps> = ({ onDeleteMode, onEditMode }) => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  // 바깥 클릭 감지해서 메뉴 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (optionsRef.current && !optionsRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    }

    if (showOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions]);

  return (
    <header className='more archive' style={{ position: 'relative' }}>
      <button className="back-button" onClick={() => navigate('/MoreHome')}>
        <img src={back} alt="back" />
      </button>
      <h2 className="title">내 아카이브</h2>

      <p className="more-button">
        <button onClick={toggleOptions} style={{ background: 'none', border: 'none', padding: 0 }}>
          <img src={more} alt="more options" />
          <span className="red-dot"></span>
        </button>
      </p>

      {showOptions && (
        <div
          ref={optionsRef}
          style={{
            position: 'absolute',
            top: '90%',
            right: '2%',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
            zIndex: 100,
            width: 90,
          }}
        >
          <button
            style={{ display: 'block', width: '100%', padding: '8px', border: 'none', background: 'none', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => {
              setShowOptions(false);
              onEditMode(); // 수정 모드 진입
            }}
          >
            수정하기
          </button>
          <button
            style={{ display: 'block', width: '100%', padding: '8px', border: 'none', background: 'none', textAlign: 'center', cursor: 'pointer' }}
            onClick={() => {
              setShowOptions(false);
              onDeleteMode(); // 삭제 모드 진입
            }}
          >
            삭제하기<span className="red-dot"></span>
          </button>
        </div>
      )}
    </header>
  );
};

export default MyArchiveHeader;
