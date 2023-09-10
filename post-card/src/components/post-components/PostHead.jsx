import React from 'react';
import "../../css/PostHead.css";
import ProfileIcon from "../../assets/profile.jpg";

export const PostHead = () => {
  return (
    <div className='post-head' >
      <div className='post-head-image' >
        <img src={ProfileIcon} />
      </div>
      <div className='post-head-username' >
          Username
      </div>
    </div>
  )
}
