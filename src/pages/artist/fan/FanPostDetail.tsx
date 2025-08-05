import React from 'react';
import PostList from '../../../components/PostList';
import post1 from '../../../assets/img/IllitHomeimg/postimg/post1.png';
import post2 from '../../../assets/img/IllitHomeimg/postimg/post2.png';
import post3 from '../../../assets/img/IllitHomeimg/postimg/post3.png';
import postmj1 from '../../../assets/img/IllitHomeimg/postimg/postmj1.png';
import postmj2 from '../../../assets/img/IllitHomeimg/postimg/postmj2.png';
import postmk1 from '../../../assets/img/IllitHomeimg/postimg/postmk1.png';
import postmk2 from '../../../assets/img/IllitHomeimg/postimg/postmk2.png';
import postmk3 from '../../../assets/img/IllitHomeimg/postimg/postmk3.png';
import postmk4 from '../../../assets/img/IllitHomeimg/postimg/postmk4.png';
import postih1 from '../../../assets/img/IllitHomeimg/postimg/postih1.png';
import postih2 from '../../../assets/img/IllitHomeimg/postimg/postih2.png';
import postih3 from '../../../assets/img/IllitHomeimg/postimg/postih3.png';
import postih4 from '../../../assets/img/IllitHomeimg/postimg/postih4.png';
import postyn1 from '../../../assets/img/IllitHomeimg/postimg/postyn1.png';
import postyn2 from '../../../assets/img/IllitHomeimg/postimg/postyn2.png';
import postyn3 from '../../../assets/img/IllitHomeimg/postimg/postyn3.png';
import pr1 from '../../../assets/img/IllitHomeimg/postimg/pr1.png';
import pr2 from '../../../assets/img/IllitHomeimg/postimg/pr2.png';
import pr3 from '../../../assets/img/IllitHomeimg/postimg/pr3.png';
import pr4 from '../../../assets/img/IllitHomeimg/postimg/pr4.png';
import pr from '../../../assets/img/IllitHomeimg/postimg/profile.png';
import down from '../../../assets/img/IllitHomeimg/postimg/down.png';

import './FanPostDetail.css';

interface User {
  name: string;
  profileImg: string;
  time: string;
}

interface Post {
  user: User;
  text: string;
  images: string[];
  likes: number;
  comments: number;
}

const FanPostDetail: React.FC = () => {
  const dummyPosts: Post[] = [
    {
      user: {
        name: '아일릿쫀득단지',
        profileImg: pr,
        time: '10분 전',
      },
      text: `원희야 오늘도 무대에서 너무 빛났어 ✨
너의 웃음 하나에 하루 피로가 싹 풀리는 기분이야.
항상 응원하고 있어, 무리하지 말고 건강 꼭 챙겨!
앞으로도 쭉 함께할게 💖`,
      images: [post1, post2, post3],
      likes: 16,
      comments: 4,
    },
    {
      user: {
        name: '고막요정러버',
        profileImg: pr1,
        time: '16분 전',
      },
      text: `모카 노래 들으면 모든 게 리셋되는 기분이야🔄
너 목소리는 힐링 그 자체… 약간 반칙 아님? 😭
덕분에 오늘도 버텼다 고마워 진짜♥️`,
      images: [postmk1, postmk2, postmk3, postmk4],
      likes: 10,
      comments: 4,
    },
    {
      user: {
        name: '민쥬러버덕 💜',
        profileImg: pr2,
        time: '24분 전',
      },
      text: `이 편지를 읽고 있다면... 넌 진짜 최고야!
비쥬얼, 춤, 라이브 뭐 하나 빠지는 게 없는 울 민주ㅠ
너 덕분에 심장아 나대지마 상태`,
      images: [postmj1, postmj2],
      likes: 16,
      comments: 24,
    },
    {
      user: {
        name: '이로로하돌돌이',
        profileImg: pr3,
        time: '30분 전',
      },
      text: `로로로하야 넌 존재 자체가 뽀짝뽀짝 러블리함 그 자체🍭
요즘 로하한테 푹 빠져서 정신 못 차리는 중😵‍💫
이 세상 텐션 아냐 너… 널 보면 그`,
      images: [postih1, postih2, postih3, postih4],
      likes: 5,
      comments: 8,
    },
    {
      user: {
        name: '밤하늘윤아',
        profileImg: pr4,
        time: '1시간 전',
      },
      text: `윤아야 넌 무대 위에서 별이야 진짜🌟
한 번 빠지면 헤어나올 수 없는 윤아 매직
오늘도 너 덕분에 내 하루는 완벽했어💯`,
      images: [postyn1, postyn2, postyn3],
      likes: 3,
      comments: 8,
    },
  ];

  return (
    <div className="container FanPostDetail">
      <p className="recent">
        최신순 <img src={down} alt="down arrow" />
      </p>
      <div className="fan-post-detail-container">
        <PostList posts={dummyPosts} />
      </div>
    </div>
  );
};

export default FanPostDetail;
