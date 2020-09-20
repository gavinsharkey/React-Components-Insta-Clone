// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
  const { likePost, unlikePost, numberOfLikes } = props;
  const [isLiked, setIsLiked] = useState(false)

  const handleLikePost = () => {
    if (!isLiked) {
      likePost()
      setIsLiked(true)
    } else {
      unlikePost()
      setIsLiked(false)
    }
  }

  const likeColor = () => ({color: isLiked ? 'red' : 'black'})

  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper' onClick={handleLikePost}>
          <FontAwesomeIcon style={likeColor()} icon={faHeart} />
        </div>
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
