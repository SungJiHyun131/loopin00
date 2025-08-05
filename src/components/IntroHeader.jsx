import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'
import './IntroHeader.css'

const IntroHeader = () => {
    const navigate = useNavigate();
    return (
      <div>
      <header className='header intro'>
            <button className="back-button" onClick={()=> navigate(-1)}><img src={back} alt="" /></button>
            <h2 className="title">title</h2>
            <p className="more-button">more</p> 
          </header>
      </div>
    )
}

export default IntroHeader
