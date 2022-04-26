import React from 'react'
import './Projects.css'

export default function Projects() {


  // const observer = new IntersectionObserver(entries => {

  // });

  return (
    <div className="projects">
      <div>
        <h1>Dev Projects</h1>
      </div>
      <div className="project_cards">
      <div className="project_card">
          <a target="_blank" rel="noopener noreferrer" href="https://www.yumeverse.com/">
            <img className="project_img" src="https://i.imgur.com/jmclJVK.png" alt="Yumeverse NFT" height="150" width="300" /></a>
          <h2 className="project_title">YUMEVERSE NFT</h2>
          <br />
          <h5>Yumeverse is a collection of 7,777 NFTs influenced by dreams and built on the Ethereum blockchain. The first NFT to offer "dreamstate," which allows the owners of token to shift between both a Yume and Akuma NFT</h5>
          <br />
          <h5>Minting Dapp, Gas Optimized ERC721A Contract, and Merkle Tree for Whitelist</h5>
          <br />
          <h5>Built with: <u>React,</u> <u>Solidity,</u> <u>Ethers.js</u></h5>
          <div className="project_links">
          <a target="_blank" rel="noopener noreferrer" href="https://www.yumeverse.com/">
            <img className="project_link_logos" src="https://i.imgur.com/aBfy9ee.png" alt="Yumeverse Site"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="https://rinkeby.etherscan.io/address/0xBb8A7Fc36845943dc8db19caDe2C555171a19b28#code">
            <img className="project_link_logos" src="https://i.imgur.com/f9iqqoB.png" alt="Etherscan"></img></a>
          <a target="_blank" rel="noopener noreferrer" href="/">
            <img className="project_link_logos" src="https://i.imgur.com/Edd62oy.png" alt="Opensea"></img></a>
          </div>
        </div>
        <div className="project_card">
          <a target="_blank" rel="noopener noreferrer" href="https://www.onesiesworldnft.com/">
            <img className="project_img" src="https://i.imgur.com/IXAkKgB.png" alt="onesies world nft" height="150" width="300" /></a>
          <h2 className="project_title">Onesies World NFT</h2>
          <br />
          <h5>Onesies is a collection of 5,555 cozy NFTs dreaming big on the Ethereum blockchain. We aim to enable our holders to share their goal and vision while we build the future of the metaverse together!</h5>
          <br />
          <h5>Minting Dapp, Gas Optimized ERC721A Contract, and Merkle Tree for Whitelist</h5>
          <br />
          <h5>Built with: <u>React,</u> <u>Solidity,</u> <u>Ethers.js</u></h5>
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
        <iframe src="https://player.vimeo.com/video/691981366?h=94451f059c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="150" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="MsgMayor"></iframe>
          <h2>Message the Mayor Script</h2>
          <br />
          <h5>The script was developed to help elderly individuals in Lower East Side Manhattan fill out a form to contact the mayor of New York City to oppose the construction of a new mega jail in lower manhattan. The user fills out a google form with their name and email, the data is stored on a google sheet, an api is used to fill out the Contact Mayor form on the cities website with a prewritten message by the Welcome to Chinatown team. The script also uses a rotating set of proxies and solves captchas.</h5>
          <br />
          <h5>Built with: <u>Javascript,</u> <u>Puppeteer.js,</u> <u>2Captcha API</u></h5> 
        </div>
        <div className="project_card">
          <a target="_blank" rel="noopener noreferrer" href="https://frntr.netlify.app/">
            <img className="project_img" src="https://i.imgur.com/RnvYaLy.png" alt="FRNTR Furniture" height="150" width="300" /></a>
          <h2>FRNTR Furniture Store</h2>
          <br />
          <h5>FRNTR Furniture is an online furniture store that is built with a React frontend. Users are able to add items to the collection, login and stay logged in using JWT, and add items to a shopping cart</h5>
          <br />
          <h5>Built with: <u>React,</u> <u>Node,</u> <u>Express,</u> <u>MongoDB</u></h5>
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
