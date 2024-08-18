import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-b from-black'>
      <h1 className=' text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/2'>{overview}</p>
      <div className=' flex gap-2'>
        <button className='px-12 py-4 text-xl bg-white text-black rounded-lg'>▶️ Play</button>
        <button className='px-12 py-4 text-xl bg-gray-400 bg-opacity-50 rounded-lg'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
