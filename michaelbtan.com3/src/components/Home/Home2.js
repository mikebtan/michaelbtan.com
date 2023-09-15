import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              <b className="purple">I am software engineer interested in web3 and solving problems using technology!</b>
              <br />
              <br />
              In a past life I was the founder of Eggloo with accolades including being a Zagat Food Innovators 30 under 30. I operate an ecommerce brand that sells asian flavored waffle mixes. Currently, I am a software engineer building apps on the blockchain, and loving it. 
              <br />
              <br />
              I am also a collector of limited sneakers, rare basketball/pokemon cards, art, and wine.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
