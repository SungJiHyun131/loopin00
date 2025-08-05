import React from 'react';
import CompactVideoList from '../../../components/CompactVideoList';
import compact1 from '../../../assets/img/IllitHomeimg/mediaimg/compact1.png';
import compact2 from '../../../assets/img/IllitHomeimg/mediaimg/compact2.png';
import compact3 from '../../../assets/img/IllitHomeimg/mediaimg/compact3.png';
import compact4 from '../../../assets/img/IllitHomeimg/mediaimg/compact4.png';
import compact5 from '../../../assets/img/IllitHomeimg/mediaimg/compact5.png';

interface Video {
  id: number;
  title: string;
  date: string;
  duration: string;
  thumbnail: string;
  link: string;
}

const updateVideos: Video[] = [
  {
    id: 1,
    title: '빌려온 고양이 ( Do the Dance ) 녹음 비하인드 | [BEHIND-IT]',
    date: '2025.07.07',
    duration: '28:34',
    thumbnail: compact1,
    link: 'https://youtu.be/5mx2Dgdy82g?si=rd4nLIEtYURJxnK5',
  },
  {
    id: 2,
    title: '빌려온 고양이(Do the Dance) - 아일릿 (ILLIT) [뮤직뱅크/Music Bank] | KBS',
    date: '2025.07.04',
    duration: '03:48',
    thumbnail: compact2,
    link: 'https://youtu.be/5mx2Dgdy82g?si=rd4nLIEtYURJxnK5',
  },
  {
    id: 3,
    title: '‘빌려온 고양이 ( Do the Dance )’ Official MV',
    date: '2025.07.04',
    duration: '04:02',
    thumbnail: compact3,
    link: 'https://youtu.be/5mx2Dgdy82g?si=rd4nLIEtYURJxnK5',
  },
  {
    id: 4,
    title: '‘빌려온 고양이 ( Do the Dance )’  DANCE Practice',
    date: '2025.07.04',
    duration: '03:48',
    thumbnail: compact4,
    link: 'https://youtu.be/5mx2Dgdy82g?si=rd4nLIEtYURJxnK5',
  },
  {
    id: 5,
    title: 'ILLIT(아일릿) ‘빌려온 고양이 ( Do the Dance )’ (4K) | STUDIO CHOOM ORIGINAL',
    date: '2025.07.04',
    duration: '03:48',
    thumbnail: compact5,
    link: 'https://youtu.be/5mx2Dgdy82g?si=rd4nLIEtYURJxnK5',
  },
  // ...더 추가 가능
];

const MediaB: React.FC = () => {
  return (
    <div className="container MediaB">
      <p className="subtitle">Update</p>
      <CompactVideoList videos={updateVideos} />
    </div>
  );
};

export default MediaB;
