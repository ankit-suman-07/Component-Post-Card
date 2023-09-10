import React, { useState } from 'react';
import "../css/PostCard.css";

import { PostHead } from './post-components/PostHead';
import { PostBody } from './post-components/PostBody';
import { PostInteract } from './post-components/PostInteract';
import { PostCaption } from './post-components/PostCaption';
import { PostComment } from './post-components/PostComment';

export const PostCard = () => {
    const [commentDisplayStatus, setCommentDisplayStatus] = useState(false);

    // Function to update commentDisplayStatus
  const toggleCommentDisplay = () => {
    setCommentDisplayStatus(prevStatus => !prevStatus);
  };
    
  return (
    <div className='post-card' >
        PostCard
        <PostHead />
        <PostBody />
        <PostInteract toggleCommentDisplay={toggleCommentDisplay} />
        <PostCaption />
        {
            commentDisplayStatus && <PostComment />
        }
    </div>
  )
}
