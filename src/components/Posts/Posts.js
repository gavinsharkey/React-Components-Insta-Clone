import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = ({ likePost, unlikePost, addComment, posts }) => {
  return (
    <div className='posts-container-wrapper'>
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          likePost={likePost}
          unlikePost={unlikePost}
          addComment={addComment}
        />
      ))}
    </div>
  );
};

export default Posts;
