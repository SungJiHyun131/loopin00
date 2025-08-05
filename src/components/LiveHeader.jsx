import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png';
import more from '../assets/img/header_more.png';


const LiveHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
        <header className='more'>
               <button className="back-button" onClick={()=> navigate('/ArtistHome')}>
                <span className="red-dot"></span>
                <img src={back} alt="" /></button>
               <h2 className="title">LIVE</h2>
               <p className="more-button"><a href=""><img src={more} alt="" /></a></p> 
        </header>
    </div>
  )
}

export default LiveHeader
