import React from 'react'
import { useNavigate } from 'react-router-dom';
import close from '../assets/img/header_close.png';
import more from '../assets/img/header_more.png';

const LiveDetailHeader = () => {
     const navigate = useNavigate();
  return (
    <div>
       <header className='more'>
          <button className="back-button" onClick={()=> navigate('/LiveHome')}><img src={close} alt="" /></button>
          <h2 className="title">ON LIVE</h2>
          <p className="more-button"><a href=""><img src={more} alt="" /></a></p> 
        </header>
    </div>
  )
}

export default LiveDetailHeader
