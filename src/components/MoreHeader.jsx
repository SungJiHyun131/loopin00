import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import back from '../assets/img/header_back.png'
const MoreHeader = () => {
    const navigate = useNavigate();
  return (
    <header>
       <button className="back-button" onClick={()=> navigate('/MainHome')}><img src={back} alt="" /></button>
        <h2 className="title">더보기</h2>
        <p className="more-button">more</p>
    </header>
  )
}

export default MoreHeader