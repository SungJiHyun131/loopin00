import React, { useState } from 'react';
import './ArchiveD.css';
import replyLine from '../../assets/img/archive/replyline.png';
import badge1 from '../../assets/img/archive/badge1.png';
import badge2 from '../../assets/img/archive/badge2.png';
import badge3 from '../../assets/img/archive/badge3.png';
import badge4 from '../../assets/img/archive/badge4.png';
import badge5 from '../../assets/img/archive/badge5.png';
import badge6 from '../../assets/img/archive/badge6.png';
import { useOutletContext } from 'react-router-dom';

interface Reply {
  username: string;
  date: string;
  text: string;
}

interface Comment {
  username: string;
  text: string;
  replies: Reply[];
  badge: string;
}

interface MyArchiveContext {
  deleteMode: boolean;
  selectedIndexes: number[];
  setSelectedIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  setDeleteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArchiveD: React.FC = () => {
  const {
    deleteMode,
    selectedIndexes,
    setSelectedIndexes,
    setDeleteMode
  } = useOutletContext<MyArchiveContext>();

  const [comments, setComments] = useState<Comment[]>([
    {
      username: 'illit♡온슬',
      text: '로하 오늘 직캠 보고 너무 감탄했어요... 표정 연기 대박',
      replies: [{ username: '루핀즈', date: '07.01. 13:19', text: '맞아요... 진짜로' }],
      badge: badge1
    },
    {
      username: 'Aillune',
      text: '일넥곡들 모두 좋은 아침❤️ 후속곡 jeilyous 넘 기대',
      replies: [{ username: '루핀즈', date: '06.29. 11:49', text: '완전 기다려짐 🙏' }],
      badge: badge2
    },
    {
      username: 'Rohaetic',
      text: '오늘 일박하다가 진짜 멘탈 무너질 뻔했는데, 쉬는 시간에 영상보고 살았어요.',
      replies: [{ username: '루핀즈', date: '06.28. 11:49', text: '역시 멘탈 잡을 땐 민쥬!!!' }],
      badge: badge3
    },
    {
      username: 'Jennithic',
      text: '💖 JENNIE DAY 📸 제니야, 세상에 태어나줘서 고마워',
      replies: [{ username: '루핀즈', date: '06.28. 11:56', text: '제니는 빛과 소금...' }],
      badge: badge4
    },
    {
      username: '위시플',
      text: '리무 무대 위에서 진짜 눈빛이 달라요... 말할 땐 귀염인데...',
      replies: [{ username: '루핀즈', date: '06.28. 10:28', text: '완전 공감!!' }],
      badge: badge5
    },
    {
      username: '오로라',
      text: '한 명 한 명 다 너무 소중해요. 앞으로 우리가 지켜줄게',
      replies: [{ username: '루핀즈', date: '06.28. 10:25', text: '너무 너무 소중해!!!! 💜💜' }],
      badge: badge6
    }
  ]);

  const handleCheckboxClick = (idx: number) => {
    setSelectedIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleDeleteSelected = () => {
    const filtered = comments.filter((_, i) => !selectedIndexes.includes(i));
    setComments(filtered);
    setSelectedIndexes([]);
    setDeleteMode(false);
  };

  const handleCancel = () => {
    setSelectedIndexes([]);
    setDeleteMode(false);
  };

  return (
    <div className="archive-d-wrapper">
      {deleteMode && (
        <div className="delete-control-buttons" style={{ display: 'flex', justifyContent: 'space-between' ,color:'#111'}}>
          <button className="delete-button" onClick={handleDeleteSelected}>선택 삭제</button>
          <button className="cancel-button" onClick={handleCancel}>취소</button>
        </div>
      )}

{comments.map((comment, idx) => {
  const isSelected = selectedIndexes.includes(idx);
  return (
    <div
      key={idx}
      className={`archived-comment-card ${deleteMode ? 'deletable' : ''}`}
      style={{ position: 'relative' }}
      onClick={() => deleteMode && handleCheckboxClick(idx)} // 클릭으로 선택 토글
    >
      {deleteMode && (
        <div
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            fontSize: '20px',
            fontWeight: '500',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '50%',
            width: 24,
            height: 24,
            textAlign: 'center',
            border: '1px solid #333',
            userSelect: 'none',
            lineHeight: '22px',
            cursor: 'pointer',
          }}
        >
          {isSelected ? '✓' : ''}
        </div>
      )}

      {/* 기존 코멘트 내용 렌더링 */}
      <div className="archived-comment-header">
        <img src={comment.badge} alt="badge" className="archived-badge-icon" />
        <div className="archived-comment-textbox">
          <span className="archived-comment-username">{comment.username}</span>
          <p className="archived-comment-text">{comment.text}</p>
        </div>
      </div>

      {/* 리플 */}
      {comment.replies.length > 0 && (
        <div className="archived-replies">
          {comment.replies.map((reply, idx2) => (
            <div key={idx2} className="archived-reply">
              <p className="archived-reply-line-img">
                <img src={replyLine} alt="reply-line" />
              </p>
              <div className="archived-reply-content">
                <div className="archived-reply-header">
                  <div className="archived-reply-header-inner">
                    <span className="archived-reply-username">{reply.username}</span>
                    <span className="archived-reply-date">{reply.date}</span>
                  </div>
                </div>
                <p className="archived-reply-text">{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
})}

    </div>
  );
};

export default ArchiveD;
