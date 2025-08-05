import React, { useState } from 'react';
import heartOn from '../assets/img/StoreImg/icon_heart-on.png';  // 꽉 찬 하트 이미지 경로
import heartOff from '../assets/img/StoreImg/icon_heart-off.png';  // 빈 하트 이미지 경로


const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <img
      src={liked ? heartOn : heartOff}
      alt="like button"
      onClick={handleClick}
      style={{ width: '24px', cursor: 'pointer' }}
    />
  );
};

export default LikeButton;