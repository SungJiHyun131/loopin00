import React from 'react'
import {Link, useLocation, Route} from 'react-router-dom'
import MoreHeader from '../../components/MoreHeader';
import './MoreHome.css';
import icon from '../../assets/img/moreImg/profile.png'
import icon1 from '../../assets/img/moreImg/icon_profile.png'
import icon2 from '../../assets/img/moreImg/icon_bookmark.png'
import icon3 from '../../assets/img/moreImg/icon_card.png'
import icon4 from '../../assets/img/moreImg/icon_Q.png'
import icon5 from '../../assets/img/moreImg/icon_earth.png'
import icon6 from '../../assets/img/moreImg/icon_light.png'
import icon7 from '../../assets/img/moreImg/icon_setting.png'
import Footer from '../../components/Footer';
import mainbg from '../../assets/img/mainheaderbg.png'


const MoreHome = () => {
    const location = useLocation();
  return (
    <div className='bgMore'>
      <div className="moreheaderbg"><img src={mainbg} alt="" /></div>
    <div className="MoreHeader">
      <MoreHeader/>
    </div>
    <div className='container-morehome'>
      <div className="profile"><img src={icon} alt="" />루핀즈</div>
        <ul>
          <li><p className="img"><img src={icon1} alt="" /></p>내 계정</li>
          <li><Link to='/MyArchive'><p className="img"><img src={icon2} alt="" /></p>내 아카이브<span></span></Link></li>
          <li><Link to='/Subscribe'><p className="img"><img src={icon3} alt="" /></p>구독권 관리<span></span></Link></li>
          <li><p className="img"><img src={icon4} alt="" /></p>도움말</li>
          <li><p className="img"><img src={icon5} alt="" /></p>언어변경</li>
          <li><Link to='/AboutLoopin'><p className="img"><img src={icon6} alt="" /></p>루핀에 관하여<span></span></Link></li>
          <li><p className="img"><img src={icon7} alt="" /></p>로그아웃</li>
        </ul>
    </div>
    <Footer/>
    </div>
  )
}

export default MoreHome
