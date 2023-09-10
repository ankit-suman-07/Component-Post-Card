import React, { useState } from 'react';
import "../../css/PostInteract.css";

import EmptyHeart from "../../assets/heart-empty.png";
import FilledHeart from "../../assets/heart-full.png";
import CommentIcon from "../../assets/comment.png";

export const PostInteract = ({ toggleCommentDisplay }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [commentDisplayStatus, setCommentDisplayStatus] = useState(false);

  const toggleLikeDisplay = () => {
    setLikeStatus(prevLike => !prevLike);
  }

  return (
    <div className='post-interact' >
      <div className='post-interact-btn' >
        <div className='post-like-btn' >
          {
            likeStatus? <img src={FilledHeart} onClick={toggleLikeDisplay} /> : <img src={EmptyHeart}  onClick={toggleLikeDisplay} />
          }
        </div>
        <div className='post-comment-btn' >
          <img  src={CommentIcon} onClick={toggleCommentDisplay} />
        </div>
      </div>
      <span className='post-like-count' >17 likes</span>
      
    </div>
  )
}
