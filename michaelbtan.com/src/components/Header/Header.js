import React from 'react'
import './Header.css'


export default function Header() {
  return (
    <div className="header_container">
    <div className="title_container">
      <div className="header_title">
        <h1 className="firstName_title">Michael B.</h1>
        <div className="lastName_container">
          <h1 className="lastName_title">Tan</h1>
        </div>
      </div>
      <div className="about_list">
        <ul>
        <li>Web3 Advocate</li>
        <li>Full Stack Engineer</li>
        <li>Former Pseudo Chef</li>
            <li>Art - Trading Cards - Sneaker Collector</li>
      </ul>
        </div>
      </div>
      <div className="social_bar">
        <a href="/"><img src="" alt="Instagram Logo"></img></a>
        <a href="/"><img src="" alt="Tiktok Logo"></img></a>
        <a href="/"><img src="" alt="Github Logo"></img></a>
        <a href="/"><img src="" alt="Linkedin Logo"></img></a>
      </div>
    </div>
  )
}
