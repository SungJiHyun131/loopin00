import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
import back from '../assets/img/header_back.png'
import logo from '../assets/img/IllitHomeimg/illitlogo.png'
const IllitHeader = () => {
     const navigate = useNavigate();
  return (
    <header className='illitheader'>
          <button className="back-button" onClick={()=> navigate('/MainHome')}>
            <span className="red-dot"></span>
            <img src={back} alt="" /></button>
           <h2 className="title"><img src={logo} alt="" /></h2>
           <p className="more-button">more</p>
       </header>
  )
}

export default IllitHeader
