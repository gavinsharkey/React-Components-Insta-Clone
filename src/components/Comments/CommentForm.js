import React, { useState } from 'react'
import './Comments.css'

const CommentForm = ({ addComment }) => {
  const [input, setInput] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addComment(input)
    setInput('')
  }

  return (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      </form>
    </div>
  )
}

export default CommentForm