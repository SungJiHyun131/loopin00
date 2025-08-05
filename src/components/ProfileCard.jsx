import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import img1 from '../assets/img/IllitHomeimg/minju.png'
import img2 from '../assets/img/IllitHomeimg/yoona.png'
import img3 from '../assets/img/IllitHomeimg/moka.png'
import img4 from '../assets/img/IllitHomeimg/wonhee.png'
import img5 from '../assets/img/IllitHomeimg/iloha.png'
import bar from '../assets/img/IllitHomeimg/barcode.png'
import pinkstar from '../assets/img/IllitHomeimg/pinkstar.png'
import idbg from '../assets/img/IllitHomeimg/idbg.png'
import './ProfileCard.css'


const ProfileCard = () => {
  return (
    <>
      <p className="subtitle">Profile</p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="card">
          <img src={pinkstar} alt="" className="pinkstar" />
          <img src={idbg} alt="" className="idbg" />
          <div className="idcard">ILLIT Identity card</div>
          <div className="idbottom">
            <div className="img"><img src={img2} alt="윤아" /></div>
            <div className="idleft">
            <div className="txt">
              <div className="name">
                <span>Name</span>
                <p>Noh Yunah</p>
                </div>
              <div className="nickname">
                <span>Nickname</span>
                <p>YUNAH</p></div>
              <div className="intro">
                <span>Birthdate</span>
                <p>January 15th,2004</p>
                </div>
            </div>
            <div className="barcode">
              <p className="hello">Hello! We're ILLIT</p>
              <img src={bar} alt="" className="bar" />
            </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
          <img src={pinkstar} alt="" className="pinkstar" />
          <img src={idbg} alt="" className="idbg" />
          <div className="idcard">ILLIT Identity card</div>
          <div className="idbottom">
            <div className="img"><img src={img1} alt="민주" /></div>
            <div className="idleft">
            <div className="txt">
              <div className="name">
                <span>Name</span>
                <p>Park Minju</p>
                </div>
              <div className="nickname">
                <span>Nickname</span>
                <p>MINJU</p></div>
              <div className="intro">
                <span>Birthdate</span>
                <p>May 11th,2004</p>
                </div>
            </div>
            <div className="barcode">
              <p className="hello">Hello! We're ILLIT</p>
              <img src={bar} alt="" className="bar" />
            </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
          <img src={pinkstar} alt="" className="pinkstar" />
          <img src={idbg} alt="" className="idbg" />
          <div className="idcard">ILLIT Identity card</div>
          <div className="idbottom">
            <div className="img"><img src={img3} alt="모카" /></div>
            <div className="idleft">
            <div className="txt">
              <div className="name">
                <span>Name</span>
                <p>Sakai Moka</p>
                </div>
              <div className="nickname">
                <span>Nickname</span>
                <p>MOKA</p></div>
              <div className="intro">
                <span>Birthdate</span>
                <p>October 8th,2004</p>
                </div>
            </div>
            <div className="barcode">
              <p className="hello">Hello! We're ILLIT</p>
              <img src={bar} alt="" className="bar" />
            </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
          <img src={pinkstar} alt="" className="pinkstar" />
          <img src={idbg} alt="" className="idbg" />
          <div className="idcard">ILLIT Identity card</div>
          <div className="idbottom">
            <div className="img"><img src={img4} alt="원희" /></div>
            <div className="idleft">
            <div className="txt">
              <div className="name">
                <span>Name</span>
                <p>Lee Wonhee</p>
                </div>
              <div className="nickname">
                <span>Nickname</span>
                <p>WONHEE</p></div>
              <div className="intro">
                <span>Birthdate</span>
                <p>June 26,2007</p>
                </div>
            </div>
            <div className="barcode">
              <p className="hello">Hello! We're ILLIT</p>
              <img src={bar} alt="" className="bar" />
            </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
          <img src={pinkstar} alt="" className="pinkstar" />
          <img src={idbg} alt="" className="idbg" />
          <div className="idcard">ILLIT Identity card</div>
          <div className="idbottom">
            <div className="img"><img src={img5} alt="이로하" /></div>
            <div className="idleft">
            <div className="txt">
              <div className="name">
                <span>Name</span>
                <p>Hokazono Iroha</p>
                </div>
              <div className="nickname">
                <span>Nickname</span>
                <p>IROHA</p></div>
              <div className="intro">
                <span>Birthdate</span>
                <p>February 4th,2008</p>
                </div>
            </div>
            <div className="barcode">
              <p className="hello">Hello! We're ILLIT</p>
              <img src={bar} alt="" className="bar" />
            </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProfileCard;


