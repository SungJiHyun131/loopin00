import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import IllitHeader from '../../components/IllitHeader'
import './ArtistHome.css'
import folder from '../../assets/img/IllitHomeimg/folder.png'
import illit from '../../assets/img/IllitHomeimg/illit.png'
import mj from '../../assets/img/IllitHomeimg/mj.png'
import mk from '../../assets/img/IllitHomeimg/mk.png'
import yn from '../../assets/img/IllitHomeimg/yn.png'
import wh from '../../assets/img/IllitHomeimg/wh.png'
import il from '../../assets/img/IllitHomeimg/il.png'
import mouse from '../../assets/img/IllitHomeimg/mouse.png'
import minju from '../../assets/img/IllitHomeimg/pixel_minju.png'
import minju2 from '../../assets/img/IllitHomeimg/pixel_minju2.png'
import textbox from '../../assets/img/IllitHomeimg/pixel_textbox.png'
import ProfileCard from '../../components/ProfileCard'
import ScheduleCalendar from '../../components/ScheduleCalendar'
import content from '../../assets/img/IllitHomeimg/bg-ArtistHome.png';


const ArtistHome = () => {
  const location = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [artistImgIndex, setArtistImgIndex] = useState(0);
const artistImages = [il, mj, mk, wh, yn, illit];

const handleNextImage = () => {
  setArtistImgIndex((prevIndex) => (prevIndex + 1) % artistImages.length);
};
  
  // 자동으로 바뀔 텍스트와 이미지 목록
  const dialogues = [
    { text: "뭐해?", img: minju},
    { text: "밥 먹었어?", img: minju2 },
    { text: "오늘 스케줄 어때?", img: minju },
  ];

  // 자동으로 일정 시간마다 currentIndex를 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dialogues.length);
    }, 6000); // 6초마다 전환

    return () => clearInterval(interval); // 언마운트 시 인터벌 제거
  }, [dialogues.length]);


  return (
    <div>
    <div className="IllitHeader">
    <IllitHeader />
    </div>
    <div className='container-Artist'>
   
     <div className="Artisttop">
     <div className="img" onClick={handleNextImage} style={{ cursor: "pointer" }}>
      <p className="photo">Our Memories</p>
      <div className="mouse">
        <div className="cl"><img src={mouse} alt="" /></div>
        <p className="click">Click me</p>
      </div>
  <img src={artistImages[artistImgIndex]} alt="아티스트 이미지" />
</div>
      <div className="right">
      <p className="textbox">
  <span className="text">오늘 스케줄 어때?</span>
  <img src={textbox} alt="말풍선" />
</p>
      <p className="textbox1">
  <span className="text">밥 먹었어?</span>
  <img src={textbox} alt="말풍선" />
</p>
      <p className="textbox2">
  <span className="text">뭐해?</span>
  <img src={textbox} alt="말풍선" />
</p>
      <p className="textbox3">
  <span className="text">🤍🤍🤍</span>
  <img src={textbox} alt="말풍선" />
</p>
<p className="img2">
  <img src={dialogues[currentIndex].img} alt="캐릭터" />
</p>
      </div>
     </div>

     <div className="Artistbottom">
  <nav className="nav-container">
    {/* 배경 박스 */}
    <div className="nav-background first-layer" />
    <ul className="nav-row first">
      <li className="Artist"><Link to="/IllitHome"><span className="red-dot"></span><img src={folder} alt="" />Artist</Link></li>
      <li className="Live"><Link to="/LiveHome"><span className="red-dot"></span><img src={folder} alt="" />Live</Link></li>
      <li className="Store"><Link to="/StoreHome"><span className="red-dot"></span><img src={folder} alt="" />Store</Link></li>
    </ul>

    {/* 두 번째 박스 */}

    <ul className="nav-row second">
      <li className="Fan"><Link to="/FanHome"><span className="red-dot"></span><img src={folder} alt="" />Fan</Link></li>
      <li className="Notice"><Link to="/NoticeHome"><span className="red-dot"></span><img src={folder} alt="" />Notice</Link></li>
      <li className="Media"><Link to="/MediaHome"><span className="red-dot"></span><img src={folder} alt="" />Media</Link></li>
    </ul>
  </nav>
</div>


      <div className="ProfileCard">
        <ProfileCard />
      </div>
      <div className="ScheduleCalendar">
  <ScheduleCalendar />
</div>
      <div className="ArtistHomebg"><img src={content} alt="" /></div>
    </div>
    </div>
  )
}

export default ArtistHome
