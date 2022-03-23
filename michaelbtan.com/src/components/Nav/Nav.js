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
          <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/s3XDqjPcME">
            <img className="social_logos" src="https://uploads-ssl.webflow.com/6209c8427d75bce1a707e4c8/6216434fca1ed8b80d656018_Discord-p-500.png" alt="Discord"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/OnesiesWorldnft">
            <img className="social_logos" src="https://uploads-ssl.webflow.com/6209c8427d75bce1a707e4c8/621643b8ceccf879130c06dc_Twitter.png" alt="Twitter"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="/">
            <img className="social_logos" src="https://i.imgur.com/ySKZy2v.png" alt="Opensea"></img></a>
        </div>
      </div>
    </div>

  )
}
