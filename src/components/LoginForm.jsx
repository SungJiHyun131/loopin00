import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainHome from '../pages/MainHome';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && password) {
      console.log('ID:', userId, 'PW:', password);
      navigate('/MainHome');
    } else {
      alert('아이디와 비밀번호를 입력하세요');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <p className="idtxt">이용자 ID</p>
      <input
        type="text"
        placeholder="아무거나 입력"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <p className="passtxt">비밀번호</p>
      <input
        type="password"
        placeholder="아무거나 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">로그인</button>
    </form>
  );
};

export default LoginForm;