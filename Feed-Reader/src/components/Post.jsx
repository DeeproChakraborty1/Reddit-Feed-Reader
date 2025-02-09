import React from 'react';

const Post = ({post}) => {
  return (
    <>
      <div className="post">
        <h3>{post.title}</h3>
        <p>
            <strong>Author: </strong> {post.author}
        </p>
        <p>
            <strong>score: </strong> {post.score}
        </p>
        <a href={`https://reddit.com${post.permalink}`} target='blank' className='view-post'>View Post</a>
      </div>
    </>
  )
}

export default Post;