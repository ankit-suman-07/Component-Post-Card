import React from 'react';
import "../../css/PostCaption.css";

export const PostCaption = () => {
  return (
    <div className='post-caption' >
      <span className='caption-username' >username</span>
      <span className='caption-text' >This is a caption for the post above.</span>
    </div>
  )
}
