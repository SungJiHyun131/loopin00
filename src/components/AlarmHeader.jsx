import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import back from '../assets/img/header_back.png'
const AlarmHeader = () => {
    const navigate = useNavigate();
    return (
      <header className='Alarm'>
          <button className="back-button" onClick={()=> navigate('/MainHome')}><img src={back} alt="" /></button>
          <h2 className="title">알림</h2>
          <p className="more-button">more</p>
      </header>
    )
}

export default AlarmHeader