import React from 'react';
import './illitPostcard.css';
import PostCard2 from './PostCard2';
import post1 from '../assets/img/IllitHomeimg/artistimg/post1.png';
import post2 from '../assets/img/IllitHomeimg/artistimg/post2.png';
import post3 from '../assets/img/IllitHomeimg/artistimg/post3.png';
import moka from '../assets/img/IllitHomeimg/artistimg/moka.png';
import wonhee from '../assets/img/IllitHomeimg/artistimg/wonhee.png';
import post4 from '../assets/img/IllitHomeimg/artistimg/post4.png';
import post5 from '../assets/img/IllitHomeimg/artistimg/post5.png';
import post6 from '../assets/img/IllitHomeimg/artistimg/post6.png';
import post7 from '../assets/img/IllitHomeimg/artistimg/post7.png';

const illitPostcard = () => {
    const dummyPost = {
        user: {
          name: '햄보르기니',
          profileImg: wonhee,
          time: '10분 전',
        },
        text: `🍓🎀🍓🎀
딸기 메이크업⸒⸒
요즘 내가 완전 빠진 메이크업 !! 🍓
어때요~?`,
        images: [post1, post2, post3],  // import한 이미지 변수 넣기
        likes: 16,
        comments: 4,

      }
      const dummyPost2 = {
        user: {
          name: '모카삐',
          profileImg: moka,
          time: '50분 전',
        },
        text: `오늘 1위 너무너무 고마워여어ㅓ ~~ 🥺🥺💗💗💗
글릿덕분에 저는 너무너무 행복해서 날아가요~~ 🧚‍♀️🧚‍♀️`,
        images: [post4, post5, post6, post7],  // import한 이미지 변수 넣기
        likes: 3,
        comments: 90,

      }
    
      return (
        <div className="container-FanPostDetail">
        <div className="fan-post-detail-container">
        <p className="subtitle">Posts</p>
          <div className="postcard1"><PostCard2 {...dummyPost} /></div>
          <div className="postcard2"><PostCard2 {...dummyPost2} /></div>
        </div>
        </div>
      )
}

export default illitPostcard