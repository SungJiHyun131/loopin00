import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom';
import './Layout.css'
import mainbg from '../assets/img/mainheaderbg.png'


const Layout = () => {
  return (
    <div className='mainhome'>
      <div className="mainbg"><img src={mainbg} alt="" /></div>
    <Header/>
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
    <main style={{flex:1}}>
        <Outlet/>
    </main>

    </div>
    <Footer/>
    </div>
  )
}

export default Layout
