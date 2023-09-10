import React, { useState } from 'react';
import "../../css/PostComment.css";

import ProfileIcon from "../../assets/profile.jpg";
import SendIcon from "../../assets/send.png";
import PrevProfileIcon from "../../assets/prev-profile.jpg";

const username = [
  "user_1", "user_2", "user_3", "user_4", "user_5"
];

const initialComments = [
  "comment 1", "comment 2", "comment 3", "comment 4", 
  "a multiline comment for demo in case this doesn't go to the next line now it will go to the next line"
];

export const PostComment = () => {
  const [userComment, setUserComment] = useState(""); // State to store the user's input comment
  const [comments, setComments] = useState(initialComments); // State to store all comments
  const [allUsers, setAllUsers] = useState(username);

  const handleCommentChange = (e) => {
    setUserComment(e.target.value);
  };

  const handleSendComment = () => {
    if (userComment.trim() !== "") {
      // Append the user's comment to the comments array
      setComments([userComment, ...comments]);
      setAllUsers(["new_user", ...allUsers]);
      // username.push("user");
      // Clear the input field
      setUserComment("");
    }
  };

  return (
    <div className='post-comment' >
      <div className='add-comment' >
          <div className='comment-profile' >
              <img src={ProfileIcon} />
          </div>
          <div className='write-comment' >
          <input
            type='text'
            placeholder='Add Comment'
            value={userComment}
            onChange={handleCommentChange}
          />
          </div>
          <div className='comment-icon' >
              <img src={SendIcon}  onClick={handleSendComment} />
          </div>
      </div>
      <div className='previous-comments' >
          {
            username.map((user, idx) => {
              return (
                <div className='prev-comment-section' >
                  <div className='prev-user' >
                    <div className='prev-user-image' >
                      <img  src={PrevProfileIcon} />
                    </div>
                    <span className='prev-user-name' >
                      {allUsers[idx]}
                    </span>
                  </div>
                  <div className='prev-comment' >
                    {comments[idx]}
                  </div>
                </div>
                
              );
            })
          }
      </div>
    </div>
  )
}
