import React from 'react'
import { useNavigate } from 'react-router-dom';
import back from '../assets/img/header_back.png'
import cart from '../assets/img/header_cart.png'

const StoreHeader = () => {
    const navigate = useNavigate();
  return (
    <div>
         <header className='more'>
               <button className="back-button" onClick={()=> navigate('/ArtistHome')}>
                <span className="red-dot"></span>
                <img src={back} alt="" /></button>
               <h2 className="title">STORE</h2>
              <p className="more-button"><a href=""><img src={cart} alt="" /></a></p> 
             </header>
    </div>
  )
}

export default StoreHeader
