import React from 'react';
import "../../css/PostBody.css";

import PostDemo from "../../assets/post-demo.jpg";

export const PostBody = () => {
  return (
    <div className='post-body' >
      <img  src={PostDemo} />
    </div>
  )
}
