import React from 'react'
import { data } from '../../dummydata'
import Post from '../Post/Post'
import './homeContent.css'

const HomeContent = () => {
  return (
    <div className='homeContent'>
        <div className='banner'>
            <img src="/coverPhoto.jpg" alt="" className='bannerImg' />
        </div>
    {data.map((item)=>(
       <Post postItem={item}/>
    ))}
    </div>
  )
}

export default HomeContent