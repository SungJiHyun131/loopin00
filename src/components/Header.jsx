import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import './Header.css';
import logo from '../assets/img/Main_header_logo.png'
import logo2 from '../assets/img/logo2.png'
import alarm from '../assets/img/Main_header_nav1.png'
import dm from '../assets/img/Main_header_nav2.png'
import more from '../assets/img/Main_header_nav3.png'

const Header = () => {
    const location = useLocation();
  return (
    <div>
        <header className='main'>
        <p className="logo">
          <Link to='/'><img src={logo2} alt="" /></Link>
        </p>
        <ul className="nav">
        <li className="alarm">
          <Link to='/Alarm'><img src={alarm} alt="" /><span className="red-dot"></span></Link>
        </li>
        <li className="dm">
          <Link to='/Dm'><img src={dm} alt="" /><span className="red-dot"></span></Link>
        </li>
        <li className="more">
          <Link to='/MoreHome'><img src={more} alt="" /><span className="red-dot"></span></Link>
        </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
