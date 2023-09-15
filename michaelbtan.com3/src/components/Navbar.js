import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";


import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <div style={{cursor:'pointer'}} className="d-flex" onClick={scrollToTop}>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </div>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item style={{cursor:'pointer', marginTop:'.5rem'}}>
              <Link
                style={{ color: 'white' }}
                // activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                <AiOutlineHome style={{ color: 'white' }}
                />{" "}
                Home
              </Link>
            </Nav.Item>

            <Nav.Item style={{cursor:'pointer', marginTop:'.5rem'}}>
              <Link
                style={{ color: 'white' }}
                // activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                <AiOutlineFundProjectionScreen
                  style={{ color: 'white' }}
                />{" "}
                Projects
              </Link>
            </Nav.Item>

            <Nav.Item style={{cursor:'pointer', marginTop:'.5rem'}}>
              <Link
                style={{ color: 'white' }}
                activeClass="active"
                to="home-about-section"
                spy={true}
                smooth={true}
                offset={-75}
                duration={500}
              >
                <AiOutlineUser style={{ color: 'white' }}
                />{" "}
                About
              </Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
