// CommentList.jsx
import React from 'react';
import CommentCard from './CommentCard';
import './CommentList.css'
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, idx) => (
        <CommentCard key={idx} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
