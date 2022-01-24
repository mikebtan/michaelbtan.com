import React from 'react'
import './About.css'
import profilepic from './Assets/IMG_3411.JPG'

export default function About() {
  return (
    <div className="about_container">
      <div className="profile_pic">
        <img src={profilepic} alt='profile pic' height="500px" width="500px"></img>
      </div>
      <div>
        <h1>About</h1>
      </div>
    </div>
  )
}
