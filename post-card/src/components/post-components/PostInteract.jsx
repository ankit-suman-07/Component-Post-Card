import React, { useState } from 'react';
import "../../css/PostInteract.css";

import EmptyHeart from "../../assets/heart-empty.png";
import FilledHeart from "../../assets/heart-full.png";
import CommentIcon from "../../assets/comment.png";

export const PostInteract = ({ toggleCommentDisplay }) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likesCount, setLikesCount] = useState(17);

  const toggleLikeDisplay = () => {
    setLikeStatus(prevLike => !prevLike);
    if(likeStatus) {
      setLikesCount(likesCount - 1)
    }
    else {
      setLikesCount(likesCount + 1)
    }
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
      <span className='post-like-count' > {likesCount} likes</span>
      
    </div>
  )
}
