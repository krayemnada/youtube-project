import React from 'react'

const CommentList = ({commentData}) => {
  return (
    <div>
      {commentData.name}
      {commentData.body}
    </div>
  )
}

export default CommentList
