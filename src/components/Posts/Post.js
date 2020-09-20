import React from 'react';
import Comments from '../Comments/Comments';
import CommentForm from '../Comments/CommentForm'
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  const { post, likePost, unlikePost, addComment } = props;

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(post.id)} unlikePost={() => unlikePost(post.id)} numberOfLikes={post.likes} />
      <CommentForm addComment={text => addComment(post.id, text)} />
      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
