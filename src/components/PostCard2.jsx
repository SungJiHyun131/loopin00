import React, { useState } from 'react';
import {Link, Route} from 'react-router-dom';
import './PostCard2.css';
import heart from '../assets/img/IllitHomeimg/postimg/heart.png'
import comment from '../assets/img/IllitHomeimg/postimg/comment.png'
import more from'../assets/img/IllitHomeimg/postimg/more.png'
import mark from'../assets/img/IllitHomeimg/postimg/mark.png'
import badge from '../assets/img/IllitHomeimg/artistimg/official-badge.png'
import LikeButton from '../components/LikeButton';
const PostCard2 = ({ user, text, images, likes, comments, isFirst }) => {
  const [showFullText, setShowFullText] = useState(false);

  const renderImages = () => {
 if (images.length === 1) {
      return <img src={images[0]} alt="" className="single-img" />;
    } else if (images.length === 2) {
      return (
        <div className="two-imgs">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      );
    } else if (images.length === 3) {
      return (
        <div className="three-imgs">
          <img src={images[0]} alt="" className="img-left" />
          <div className="img-right">
            <img src={images[1]} alt="" className="img-top" />
            <img src={images[2]} alt="" className="img-bottom" />
          </div>
        </div>
      );
    } else if (images.length === 4) {
      return (
        <div className="four-imgs">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="post-card2">
       <span className="red-dot"></span>
      <div className="post-header">
        <div className="left-group">
        <Link to='/ArtistProfile'><img src={user.profileImg} alt="profile" className="profile-img" /></Link>
        <div className="user-info">
          <div className="username">{user.name}<img src={badge} alt=""style={{width:16}} className='username-badge'/></div>
          <div className="time">{user.time}</div>
        </div>
        </div>
        <div className="morebtn"><img src={more} alt="" /></div>
      </div>

      <div className="post-text">
        <p className={showFullText ? 'full-text' : 'clamp-text'}>{text}</p>
        {!showFullText && (
          <button onClick={() => setShowFullText(true)} className="more-btn">
            더보기
          </button>
        )}
      </div>

      <div className="post-images">{renderImages()}</div>

      <div className="post-footer">
        <div className="footer-left">
          <span className='like'><LikeButton/>{likes}k</span>
          <span><img src={comment} alt="" /> {comments}</span>
        </div>
        <div className="footer-right"><img src={mark} alt="" /></div>
      </div>
    </div>
  );
};

export default PostCard2;