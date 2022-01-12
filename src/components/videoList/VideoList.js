import React from 'react'
import VideoCard from '../videoCard/VideoCard'

const VideoList = ({videoData}) => {
  return (
    <div className='container'>
       <div className='d-flex justify-content-around flex-wrap'>
       {videoData.map((elt) =>{ return <VideoCard key={elt.id} video={elt}/> })}
       </div>
    </div>
  )
}

export default VideoList
