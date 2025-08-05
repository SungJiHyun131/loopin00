import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts }) => {
  return (
    <div className="list-container">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} index={index} />
      ))}
    </div>
  );
};

export default PostList;