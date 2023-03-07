import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video/dist'
import freud from "./assets/freud.mp4"
import "../src/video.css"

export default function video() {
  return (
    <div className='video'>
    <Video autoPlay >
   <source src={freud} type="video/webm"></source>
    </Video>
    </div>
  )
}
