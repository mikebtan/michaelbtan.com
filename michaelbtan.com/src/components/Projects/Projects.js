import React from 'react'
import './Projects.css'

export default function Projects() {

  return (
    <div className="projects">
      <div className="projects_title">
        <h1>Dev Projects</h1>
      </div>
      <div className="project_cards">
        <div className="project_card">
          <a target="_blank" rel="noopener noreferrer" href="https://www.onesiesworldnft.com/">
            <img className="project_img" src="https://i.imgur.com/IXAkKgB.png" alt="onesies world nft" height="150" width="300" /></a>
          <h2>Onesies World NFT</h2>
          <br />
          <h5>Onesies is a collection of 5,555 cozy NFTs dreaming big on the Ethereum blockchain. We aim to enable our holders to share their goal and vision while we build the future of the metaverse together!</h5>
          <br />
          <h5>Built with: React, Solidity, Ethers.js</h5>
          <div className="project_links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.onesiesworldnft.com/">
            <img className="project_link_logos" src="https://i.imgur.com/aBfy9ee.png" alt="Onesies World Site"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://rinkeby.etherscan.io/address/0xd323331423d834b503abf34253222c81648d1503#code">
            <img className="project_link_logos" src="https://i.imgur.com/f9iqqoB.png" alt="Etherscan"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="/">
            <img className="project_link_logos" src="https://i.imgur.com/Edd62oy.png" alt="Opensea"></img></a>
          </div>
        </div>
        <div className="project_card">
          <img className="project_img" src="https://i.imgur.com/RnvYaLy.png" alt="FRNTR Furniture" height="150" width="300" />
          <h2>Message the Mayor Script</h2>
          <br />
          <h5>The script was developed to help elderly individuals in Lower East Side Manhattan fill out a form to contact the mayor of New York City to oppose the construction of a new mega jail in lower manhattan. The user fills out a google form with their name and email, the data is stored on a google sheet, an api is used to fill out the Contact Mayor form on the cities website with a prewritten message by the Welcome to Chinatown team. The script also uses a rotating set of proxies and solves captchas.</h5>
          <br />
          <h5>Built with: Javascript, Puppeteer.js, 2Captcha API </h5> 
        </div>
        <div className="project_card">
          <a target="_blank" rel="noopener noreferrer" href="https://frntr.netlify.app/">
            <img className="project_img" src="https://i.imgur.com/RnvYaLy.png" alt="FRNTR Furniture" height="150" width="300" /></a>
          <h2>FRNTR Furniture Store</h2>
          <br />
          <h5>FRNTR Furniture is an online furniture store that is built with a React frontend. Users are able to add items to the collection, login and stay logged in using JWT, and add items to a shopping cart</h5>
          <br />
          <h5>Built with: React, Node, Express, MongoDB</h5>
          <div className="project_links">
          <a target="_blank" rel="noopener noreferrer" href="https://frntr.netlify.app/">
            <img className="project_link_logos" src="https://i.imgur.com/aBfy9ee.png" alt="website"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/eterral/frntr-app">
            <img className="project_link_logos" src="https://i.imgur.com/UQ7i7Gy.png" alt="Github FRNTR"></img></a>
          </div>
        </div>
      </div>
    </div>
  )
}
