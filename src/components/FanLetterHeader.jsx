import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png';
import check from '../assets/img/check.png';
import './FanLetterHeader.css';

const FanLetterHeader = ({ isActive, onBack }) => {
  return (
    <div>
      <header className='more'>
        <button className="back-button" onClick={onBack}>
        <span className="back-red-dot"></span>
          <img src={back} alt="" />
        </button>
        <h2 className="title">
          레터작성 <span>ILLIT</span>
        </h2>
        <p className="more-button fan">
          <a href="#" style={{ opacity: isActive ? 1 : 0.3 }}>
            <img src={check} alt="" />
          </a>
        </p>
      </header>
    </div>
  )
}

export default FanLetterHeader;


