import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'

const FanHeader = () => {
const navigate = useNavigate();
  return (
    <div>
    <header className='header'>
          <button className="back-button" onClick={()=> navigate('/ArtistHome')}> <span className="back-red-dot"></span><img src={back} alt="" /></button>
          <h2 className="title">FAN</h2>
          <p className="more-button">more</p> 
        </header>
    </div>
  )
}

export default FanHeader
