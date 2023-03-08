import React from 'react'
import './post.css'

const Post = ({postItem}) => {
  return (
    <div className='postContainer'>
      <div>
        <img src='/post.jpg' alt='post' className='postImg'/>
      </div>
      <div className='postTitle'>
        {postItem.title}
      </div>
      <div className='postDesc'>
        {postItem.desc}
      </div>
      <div className='buttonCont'>
      <button className='button'>Read more</button>
      </div>
    </div>
  )
}

export default Post