import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className="nav_container">
      <div className="left_nav">
        <Link to='/' className="logo"><i>MBT</i></Link>
      </div>
      <div className='right_nav'>
        <Link className="right_nav_content" to="/portfolio">Portfolio</Link>
        <Link className="right_nav_content" to="/contact">Contact</Link>
      </div>
    </div>
  )
}
