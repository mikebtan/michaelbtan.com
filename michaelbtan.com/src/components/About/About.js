import React from 'react'
import './About.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function About() {

  return (
    <div className="about">
      <div className="about_container">
        <Carousel className="carousel" showThumbs={false} showIndicators={false} autoPlay={true} infiniteLoop={true} showStatus={false} width="350px">
          <div>
            <img className="about_img" src="https://i.imgur.com/2RDAZGO.jpg" alt="profile pic" />
          </div>
          <div>
            <img className="about_img" src="https://i.imgur.com/Lr3jT75.jpg" alt="profile pic" />
          </div>
          <div>
            <img className="about_img" src="https://lh3.googleusercontent.com/YxPGDDoWf0TLMEqFjwb1xIHRQ3ZMcPtdLFuGK8IOKM82WokSrat_QrMOL-FSzd6cLeNyy6X6Mzwjmm1lEqJtW8ok-1kvFG1ZMKrx=w600" alt="profile pic" />
          </div>
          <div>
            <img className="about_img" src="https://i.imgur.com/fD4GXM1.jpg" alt="profile pic" />
          </div>
          <div>
            <img className="about_img" src="https://lh3.googleusercontent.com/4q5muBB15XjM6ZL1_73oAn1Lkhg5vdd_IXk1V25ybSvuzAOhLn1x-saH-K-OuAPsvTVKEpHp2AF2HDRqE8ZQ4bmyBy0-cJttOg_hPQ=w600" alt="profile pic" />
          </div>
        </Carousel>
        <div className="about_info">
          <h1>About Me</h1>
          <h3>I am software engineer interested in web3 and solving problems using technology</h3>
          <br />
          <p>Previously, I had worked as the developer on 2 NFT projects - <b>Onesises World</b> and <b>Kevin Pals</b>, which I had generated the collection of avatars, wrote and deployed an erc721A smart contract, instituted a merkle tree for whitelist validation, and built the minting dapp</p>
          <br />
          <p>I am also a collector of limited sneakers, rare basketball/pokemon cards, art, and wine</p>
          <br />
          <p><b>Currently, I am open to full-time software engineer roles.</b></p>
        </div>
      </div>
    </div>
  )
}
