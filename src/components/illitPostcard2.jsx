import React from 'react';
import './illitPostcard.css';
import PostCard3 from './PostCard3';
import post1 from '../assets/img/IllitHomeimg/artistimg/post1.png';
import post2 from '../assets/img/IllitHomeimg/artistimg/post2.png';
import post3 from '../assets/img/IllitHomeimg/artistimg/post3.png';
import post8 from '../assets/img/IllitHomeimg/artistimg/post8.png';
import post10 from '../assets/img/IllitHomeimg/artistimg/post10.png';
import post11 from '../assets/img/IllitHomeimg/artistimg/post11.png';
import post12 from '../assets/img/IllitHomeimg/artistimg/post12.png';
import wonhee from '../assets/img/IllitHomeimg/artistimg/wonhee.png';


const illitPostcard2 = () => {
  const dummyPosts = [
    {
      user: { name: '햄보르기니', profileImg: wonhee, time: '10분 전' },
      text: `🍓🎀🍓🎀 딸기 메이크업⸒⸒ 요즘 내가 완전 빠진 메이크업 !! 🍓 어때요~?`,
      images: [post1, post2, post3],
      likes: 5,
      comments: 160,
    },
    {
      user: { name: '햄보르기니', profileImg: wonhee, time: '06 25. 17:02' },
      text: `셀카를 낋여왔습니다 !!! ( *︾▽︾)`,
      images: [post8],
      likes: 3.3,
      comments: 195,
    },
    {
      user: { name: '햄보르기니', profileImg: wonhee, time: '06. 21. 12:39' },
      text: `빌려온 고양이 (귀) 😻😻🐈🤍💜`,
      images: [post10, post11, post12],
      likes: 2.3,
      comments: 234,
    },
    // 필요한 만큼 추가
  ];
    
      return (
          <div className="container-illitPostcard">
            {dummyPosts.map((post, i) => (
                <div className="postcard1" key={i}>
                  <PostCard3 {...post} />
                </div>
            ))}
        </div>
      )
}

export default illitPostcard2