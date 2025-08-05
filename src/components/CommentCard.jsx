// CommentCard.jsx
import React from 'react';
import commenticon from '../assets/img/IllitHomeimg/artistimg/comment.png'
import wonhee from '../assets/img/IllitHomeimg/artistimg/wonhee.png'
import replyLine from '../assets/img/IllitHomeimg/artistimg/reply.png'
import badge from '../assets/img/IllitHomeimg/artistimg/official-badge.png'
import './CommentCard.css'

const Reply = ({ reply }) => {
    return (
      <div className="reply">
        <div className="reply-content">
        <p className="reply-line-img">
            <img src={replyLine} alt="reply-line" />
            </p>
          <div className="reply-header">
          <div className="reply-header-inner">
          <img src={wonhee} alt="avatar" className="reply-avatar" />
            <span className="reply-username">{reply.username}</span>
            {reply.verified && (
              <img src={badge} alt="" className="badge-icon"/>
            )}
            <span className="reply-date">{reply.date}</span>
          </div>
           
          </div>
          <p className="reply-text">{reply.text}</p>
        </div>
      </div>
    );
  };
  
  const CommentCard = ({ comment }) => {
    return (
      <div className="comment-card">
        <div className="comment-header">
          <img src={commenticon} alt="" />
          <span className="comment-username">{comment.username}</span>
        </div>
        <p className="comment-text">{comment.text}</p>
  
        {comment.replies && comment.replies.length > 0 && (
          <div className="replies">
            {comment.replies.map((reply, idx) => (
              <Reply key={idx} reply={reply} />
            ))}
          </div>
        )}
      </div>
    );
  };

export default CommentCard;
