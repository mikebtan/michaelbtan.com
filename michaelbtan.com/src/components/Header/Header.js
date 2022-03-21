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
        <li className="header_list">Web3 Advocate</li>
        <li className="header_list">Full Stack Engineer</li>
        <li className="header_list">Former Pseudo Chef</li>
        <li className="header_list">Art - Trading Cards - Sneaker Collector</li>
      </ul>
        </div>
      </div>
      <div className="social_bar">
        <a href="https://www.instagram.com/michaelbtan/"><img className="social_logos" src="https://i.imgur.com/dwlurpT.png" alt="Instagram Logo"></img></a>
        <a href="https://www.tiktok.com/@michaelbtan"><img className="social_logos" src="https://i.imgur.com/wgfpQUl.png" alt="Tiktok Logo"></img></a>
        <a href="https://github.com/michaelbtan"><img className="social_logos" src="https://i.imgur.com/fnifTNN.png" alt="Github Logo"></img></a>
        <a href="https://www.linkedin.com/in/michaelbtan/"><img className="social_logos" src="https://i.imgur.com/pdBRIGi.png" alt="Linkedin Logo"></img></a>
      </div>
    </div>
  )
}
