import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css'; // 스타일은 별도로 작성
import splash from '../../assets/img/splash.png'

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Onboarding');
    }, 3000); // 3초 후 온보딩으로 이동

    return () => clearTimeout(timer); // 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={splash} alt="LOOPIN Logo" className="splash-logo" />
    </div>
  );
};

export default Splash;
