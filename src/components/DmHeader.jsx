import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import back from '../assets/img/header_back.png'
const DmHeader = () => {
    const navigate = useNavigate();
    return (
      <div>
      <header className='Dm'>
          <button className="back-button" onClick={()=> navigate('/MainHome')}><img src={back} alt="" /></button>
          <h2 className="title">DM</h2>
          <h2 className="more-button">DM</h2>
      </header>
      </div>
    )
}

export default DmHeader