import React from 'react';
import './NewMv.css'
import VideoList2 from '../components/VideoList2';
import Thum2 from '../assets/img/IllitHomeimg/mediaimg/Thum2.png';

const HistoryVideos = [
  {
    id: 1,
    title: "‘빌려온 고양이 ( Do the Dance )’  Official MV",
    date: "2025.06.16",
    thumbnail: Thum2,
    duration: "03:22",
    link: "https://youtu.be/negtrQu5mTA?si=bq97TuXK5ajVETJm",
  },
  // ...더 추가

];
const NewMv = () => {
    return (
      <div className='container-newMv'>
        <p className="subtitle">New Released</p>
        <VideoList2 videos={HistoryVideos} />
      </div>
    );
  };

export default NewMv