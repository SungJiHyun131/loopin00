import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'
const ArtistHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
       <header>
        <button className="back-button" onClick={()=> navigate('/ArtistHome')}>
          <span className="red-dot"></span>
          <img src={back} alt="" /></button>
        <h2 className="title">ARTIST</h2>
        <p className="more-button">mroe</p> 
    </header>
    </div>
  )
}

export default ArtistHeader
