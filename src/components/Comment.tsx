import React, { useState } from 'react';
import './Comment.css';
import emphe from '../assets/img/IllitHomeimg/postimg/emphe.png';
import more from '../assets/img/IllitHomeimg/postimg/more.png';
import mem from '../assets/img/IllitHomeimg/postimg/mem.png';
import artis from '../assets/img/IllitHomeimg/postimg/artis.png';
import LikeButton from './LikeButton';

interface CommentProps {
  userImg: string;
  userName: string;
  isArtist: boolean;
  text: string;
  time: string;
  likeCount: number | string;
  isReply?: boolean;
  onDelete?: () => void;
}

const Comment: React.FC<CommentProps> = ({
  userImg,
  userName,
  isArtist,
  text,
  time,
  likeCount,
  isReply = false,
  onDelete,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDelete = () => {
    if(onDelete) onDelete();
    setShowOptions(false);
  };

  return (
    <div className="fancomment">
      <div className={`comment-box ${isReply ? 'comment-reply' : ''}`}>
        <img src={userImg} alt="profile" className="comment-profile-img" />
        <div className="comment-content">
          <div className="comment-header">
            <div className="comment-header-left">
              <span className="comment-user-name">{userName}</span>
              <span className="comment-artist-badge">
                <img src={isArtist ? artis : mem} alt="user badge" />
              </span>
              <span className="comment-time">{time}</span>
            </div>
            <p className="more-wrapper">
              {onDelete && (
                <div className="more-wrapper">
                  <p className="more" onClick={() => setShowOptions(!showOptions)}>
                    <img src={more} alt="more options" />
                  </p>

                  {showOptions && (
                    <div className="bottomSheet">
                      <button>수정하기</button>
                      <button onClick={handleDelete}>삭제하기</button>
                    </div>
                  )}
                </div>
              )}
            </p>
          </div>

          <p className="comment-text">{text}</p>

          <div className="comment-footer">
            <button className="comment-like-btn">
              <LikeButton /> {likeCount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
