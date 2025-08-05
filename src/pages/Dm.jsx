import React from 'react'
import DmHeader from '../components/DmHeader'
import {Routes, Route } from 'react-router-dom';
import "./Dm.css"


import P1 from "../assets/img/DMImg/moka.png"
import P2 from "../assets/img/DMImg/won.png"
import P3 from "../assets/img/DMImg/정원.png"
import P4 from "../assets/img/DMImg/닝닝.png"
import P5 from "../assets/img/DMImg/제니.png"
import P6 from "../assets/img/DMImg/태산.png"
import P7 from "../assets/img/DMImg/성찬.png"
import P8 from "../assets/img/DMImg/더보기.png"
import DM from "../assets/img/DMImg/DM.png"
import SearchBar2 from '../components/SearchBar2';
import mainbg from '../assets/img/mainheaderbg.png'

const Dm = () => {
  
  return (
    <div className='bgdm'> 
    <div className="dmheaderbg"><img src={mainbg} alt="" /></div>
      <div className="DmHeader">
        <DmHeader/>
      </div>
      <div className="container Dm">
      <SearchBar2 onChange={(e) => setQuery(e.target.value)} />
      <div className="message">
        <h3>메세지</h3>
    
        <ul>
          <li>
            <img src={P1} alt="" />
            <div className="right">
              <div className="top">
                <p className="name">모카</p>
                <p className="date">3분 전</p>
              </div>
              <p className="content">오늘 하루 어땠어? 난 노래 연습했어💛</p>
            </div>
          </li>
          <li>
            <img src={P2} alt="" />
            <div className="right">
              <div className="top">
                <p className="name">원희</p>
                <p className="date">10분 전</p>
              </div>
              <p className="content">오늘 연습 끗~ 글릿은 머해용~~?</p>
            </div>
          </li>
        </ul>
      </div>
     
      </div>
      <div className="recommend">
        <h3>추천</h3>
        <ul>
          <li>
            <p className="img"><img src={P3} alt="" /></p>
            <p>정원</p>
          </li>
          <li>
            <p className="img"><img src={P4} alt="" /></p>
            <p>닝닝</p>
          </li>
          <li>
            <p className="img"><img src={P5} alt="" /></p>
            <p>제니</p>
          </li>
          <li>
            <p className="img"><img src={P6} alt="" /></p>
            <p>태산</p>
          </li>
          <li>
            <p className="img"><img src={P7} alt="" /></p>
            <p>성찬</p>
          </li>
          <li>
            <p className="img"><img src={P8} alt="" /></p>
            <p>더보기</p>
          </li>
        </ul>
      </div>
    </div>
  )
}






<Route path="DmHeader" element={<DmHeader/>} />

export default Dm
