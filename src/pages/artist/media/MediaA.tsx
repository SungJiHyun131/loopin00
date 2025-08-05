import React from 'react';
import VideoList from '../../../components/VideoList';
import Thum1 from '../../../assets/img/IllitHomeimg/mediaimg/Thum1.png';
import Thum2 from '../../../assets/img/IllitHomeimg/mediaimg/Thum2.png';
import Thum3 from '../../../assets/img/IllitHomeimg/mediaimg/Thum3.png';

interface Video {
  id: number;
  title: string;
  date: string;
  thumbnail: string;
  duration: string;
  link: string;
}

const NewVideos: Video[] = [
  {
    id: 1,
    title: "‘빌려온 고양이 ( Do the Dance )’ 녹음 비하인드 | [BEHIND-IT]",
    date: "2025.07.07",
    thumbnail: Thum1,
    duration: "28:34",
    link: "https://youtu.be/5mx2Dgdy82g?si=Jpt9VWl3Bh3bM2dd",
  },
  // ...더 추가
];

const HistoryVideos: Video[] = [
  {
    id: 1,
    title: "‘빌려온 고양이 ( Do the Dance )’  Official MV",
    date: "2025.06.16",
    thumbnail: Thum2,
    duration: "03:22",
    link: "https://youtu.be/negtrQu5mTA?si=bq97TuXK5ajVETJm",
  },
  {
    id: 2,
    title: "‘빌려온 고양이 ( Do the Dance )’  DANCE Practice",
    date: "2025.06.19",
    thumbnail: Thum3,
    duration: "03:19",
    link: "https://youtu.be/htXv7fpQlNc?si=fitjpypsVq3_NTC-",
  },
  // ...더 추가
];

const MediaA: React.FC = () => {
  return (
    <div className='container'>
      <p className="subtitle">New</p>
      <VideoList videos={NewVideos} />
      <p className="subtitle">History</p>
      <VideoList videos={HistoryVideos} />
    </div>
  );
};

export default MediaA;
