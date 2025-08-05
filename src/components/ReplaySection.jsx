import React from 'react';
import ReplayCard from './ReplayCard';
import './ReplaySection.css';
import thumb1 from '../assets/img/IllitHomeimg/Live/Livethum1.png'
import thumb2 from '../assets/img/IllitHomeimg/Live/Livethum2.png'
import thumb3 from '../assets/img/IllitHomeimg/Live/Livethum3.png'
import thumb4 from '../assets/img/IllitHomeimg/Live/Livethum4.png'
import thumb5 from '../assets/img/IllitHomeimg/Live/Livethum5.png'
const replayData = [
  {
    thumbnail: thumb1,
    date: '2025년 06월 23일',
    title: '윤아가 쉴 때는 뭐하는지 궁금하다면?',
    subtitle:'(what 윤아 does during her...)',
    hashtags: ['minju', 'daily'],
  },
  {
    thumbnail: thumb2,
    date: '2025년 06월 21일',
    title: '애정템 소개할게요 🤍 ',
    subtitle:'(원희의 What’s In My Bag)',
    hashtags: ['wonhee', 'bag'],
  },
  {
    thumbnail: thumb3,
    date: '2025년 06월 16일',
    title: '윤아의 취향 저격👑',
    subtitle:'(윤아’s Heart Pick)',
    hashtags: ['yunah', 'taste'],
  },
  {
    thumbnail: thumb4,
    date: '2025년 06월 11일',
    title: '모카라떼 좋아해? ',
    subtitle:'(모카의 mocah latte 🍵)',
    hashtags: ['moka', 'cafe'],
  },
  {
    thumbnail: thumb5,
    date: '2025년 02월 01일',
    title: '오늘 뭐해요 글릿? ',
    subtitle:'(Hanging Out Today 💬)',
    hashtags: ['minju', 'hanging out'],
  },
  // 나머지 카드들도 동일하게 추가
];

const ReplaySection = () => {
  return (
    <div className="replay-section">
      <h2 className='subtitle'>Replay</h2>
      <div className="replay-list">
        {replayData.map((item, index) => (
          <ReplayCard
            key={index}
            thumbnail={item.thumbnail}
            date={item.date}
            title={item.title}
            subtitle={item.subtitle}
            hashtags={item.hashtags}
          />
        ))}
      </div>
    </div>
  );
};

export default ReplaySection;
