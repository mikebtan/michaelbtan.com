import React, { useState, useEffect } from 'react'
import Nav from "../Nav/Nav.js"
import NavMobile from "../Nav/NavMobile.js"


export default function Layout(props) {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
  }}, [])

    return (
        <div className = "layout"> 
      {screenWidth > 950 ? <Nav /> : <NavMobile />}
            <div className = "layout-children">
                {props.children}
            </div>
        </div>
    )
}