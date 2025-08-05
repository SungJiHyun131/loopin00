import React from 'react';
import CommentList from '../../../components/CommentList';

interface Reply {
  username: string;
  verified?: boolean;
  date: string;
  text: string;
}

interface Comment {
  username: string;
  text: string;
  replies: Reply[];
}

const commentsData: Comment[] = [
  {
    username: '워니조아걸',
    text: '원희야 뭐행',
    replies: [
      {
        username: '햄보르기니',
        verified: true,
        date: '07.01 13:19',
        text: '사녹 대기중!! 떨린다 ㅎㅎ',
      },
    ],
  },
  {
    username: '햄부기팍스',
    text: '오늘 점심 추천해죠',
    replies: [
      {
        username: '햄보르기니',
        verified: true,
        date: '07.01 13:12',
        text: '햄부기 어때요? ㅎ 저는 피자 먹었어요~~',
      },
    ],
  },
  {
    username: '제발 지옥같은 곳에서 날 꺼내줘',
    text: '원희야 나 곧 시험봐 응원해줘 ㅜㅜ',
    replies: [
      {
        username: '햄보르기니',
        verified: true,
        date: '07.01 13:10',
        text: '햄보르기니 행운 다 가져가세요 ~~~~ 💜🤍',
      },
    ],
  },
  {
    username: '어른릿',
    text: '나 오늘 원희 보러간다아~',
    replies: [
      {
        username: '햄보르기니',
        verified: true,
        date: '07.01 13:05',
        text: '저도 글릿 만날 생각에 너무 떨려요 ㅎㅎ ',
      },
    ],
  },
  {
    username: '햄북스딱스',
    text: '워니야 이따봐 나 사첵간당',
    replies: [
      {
        username: '햄보르기니',
        verified: true,
        date: '06.30 12:01',
        text: '조심히 와요 ~ 🥰!!',
      },
    ],
  },
  {
    username: '냠먐미',
    text: '워니야 점심 뭐먹었어???',
    replies: [
      {
        username: '햄보르기니',
        verified: true,
        date: '06.20 11:58',
        text: '오늘은 에그 샌드위치 먹었어요 ㅎㅎ (❁´◡`❁)',
      },
    ],
  },
  // ...더 많은 댓글 데이터
];

const ArtistB: React.FC = () => {
  return (
    <div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default ArtistB;
