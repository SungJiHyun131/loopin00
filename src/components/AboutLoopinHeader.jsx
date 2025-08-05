import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png';
import './Header.css';

const AboutLoopinHeader = () => {
        const navigate = useNavigate();
  return (
    <header>
       <button className="back-button" onClick={()=> navigate('/MoreHome')}><img src={back} alt="" /></button>
        <h2 className="title">LOOPIN에 관하여</h2>
        <p className="more-button">more</p>
    </header>
  )
}

export default AboutLoopinHeader