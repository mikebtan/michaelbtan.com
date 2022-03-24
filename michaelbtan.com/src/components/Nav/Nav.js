import './Nav.css'
import { Link, animateScroll as scroll } from "react-scroll";


export default function Nav() {

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_logo" onClick={scrollToTop}>
          <h1 className="nav_title">MBT | Dev Porfolio</h1>
        </div>
        <div className="nav_anchors">
          <Link
            className="nav_links"
            activeClass="active"
            to="about" spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >About Me</Link>
          <Link
            className="nav_links"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
        >Projects</Link>
          <Link
            className="nav_links"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
        >Contact</Link>  
        </div>

        <div className="social_links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michaelbtan/">
            <img className="social_logos" src="https://i.imgur.com/pdBRIGi.png" alt="Linkedin"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/michaelbtan">
            <img className="social_logos" src="https://i.imgur.com/fnifTNN.png" alt="Github"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tanmichael74">
            <img className="social_logos" src="https://i.imgur.com/DhUGreh.png" alt="Twitter"></img></a>
        </div>
      </div>
    </div>

  )
}
