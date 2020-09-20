import React, { useState } from 'react';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import { v4 as uuid } from 'uuid'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData)
  const [search, setSearch] = useState('')

  const likePost = postId => {
    setPosts(prevState => {
      return prevState.map(post => {
        return post.id === postId ? { ...post, likes: post.likes + 1 } : post
      })
    })
  };

  const unlikePost = postId => {
    setPosts(prevState => {
      return prevState.map(post => {
        return post.id === postId ? { ...post, likes: post.likes - 1 } : post
      })
    })
  }

  const addComment = (postId, text) => {
    setPosts(prevState => {
      return prevState.map(post => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, {id: uuid(), username: 'guest', text}] }
        } else {
          return post
        }
      })
    })
  }

  const filterPosts = () => {
    return posts.filter(post => post.username.includes(search))
  }

  return (
    <div className='App'>
      <SearchBar value={search} setSearch={setSearch} />
      <Posts
        posts={filterPosts()}
        likePost={likePost}
        unlikePost={unlikePost}
        addComment={addComment}
      />
    </div>
  );
};

export default App;
