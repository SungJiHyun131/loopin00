import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Onboarding.css';
import letter from '../../assets/img/letter.gif'
import dst from '../../assets/img/dst.gif'
import IntroHeader from '../../components/IntroHeader'

const slides = [
  {
    id: 1,
    title: '빨간색을 찾아보세요',
    desc: '프로토타입을 위한 가이드입니다.  \n 빨간색 원 또는 빨간색 텍스트로 \n 표시된 곳을 클릭해주세요!',
  },
  {
    id: 2,
    title: '타임캡슐 열기 완료',
    desc: '이제 너만의 팬덤 세계가 열렸어.  \n 잊지 말고 매일 찐사랑을 기록해줘',
  },
  {
    id: 3,
    title: '편지는 마음을 닮아',
    desc: '팬레터, 비밀레터, 스탠딩보드까지\n 너만의 방식으로 마음을 전해봐! ✧₊˚',
  }
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      navigate('/Login');
    }
  };

  return (
    <div>
      <IntroHeader/>
      <div className={`onboarding-container ${
  current === 1 ? 'bg1' : 'bg2'
}`}>
   <h2 className="onboarding-title">
   {current === 0 && <span className="red-dot"></span>}
  {slides[current].title}
</h2>
      <p className="onboarding-desc">{slides[current].desc}</p>
      {current === 2 && (
      <img src={letter} alt="스페셜 이미지" className="onboarding-letter" />
    )}
      {current === 0 && (
      <img src={dst} alt="스페셜 이미지" className="onboarding-guide" />
    )}
      <button className="onboarding-btn" onClick={nextSlide}>
        {current === slides.length - 1 ? '다음' : '다음'}
      </button>
    </div>
    </div>
  );
};

export default Onboarding;
