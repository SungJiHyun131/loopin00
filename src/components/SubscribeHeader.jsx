import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'
import more from '../assets/img/header_more.png'



const SubscribeHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
    <header>
      <button className="back-button" onClick={()=> navigate('/MoreHome')}><img src={back} alt="" /></button>
        <h2 className="title">구독권</h2>
         <p className="more-button"><a href=""><img src={more} alt="" /></a></p> 
    </header>

    </div>
  )
}

export default SubscribeHeader
