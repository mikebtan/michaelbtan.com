import React from 'react'
import ProjectCards from './ProjectCards'
import NHLSite from '../../Assets/Projects/NHLSite.png'

const devProjects = [
  {
    title: 'Yumeverse',
    description: 'Yumeverse is a collection of 7,777 NFTs influenced by dreams and built on the Ethereum blockchain. The first NFT to offer "dreamstate," which allows the owners of token to shift between both a Yume and Akuma NFT',
    img: 'https://i.imgur.com/jmclJVK.png',
    ghLink: '',
    link: 'https://deft-nougat-9c9013.netlify.app/',
    etherscan: ''
  },
  {
    title: 'FRNTR Furniture',
    description: 'FRNTR Furniture is an online furniture store that is built with a React frontend. Users are able to add items to the collection, login and stay logged in using JWT, and add items to a shopping cart',
    img: 'https://i.imgur.com/RnvYaLy.png',
    ghLink: 'https://github.com/eterral/frntr-app',
    link: 'https://frntr.netlify.app/',
  },
  {
    title: 'Pokemon Trading Card Database',
    description: `The Unofficial Pokemon Card Database allows you to search for all the cards of your favorite Pokemon. If you aren't sure what pokemon, you can pull a random pokemon to see all of its available cards. Uses the Official Pokemon TCG API`,
    img: 'https://i.imgur.com/NDHr8m1.png',
    ghLink: '',
    link: '',
  },
  {
    title: 'Message the Mayor Script',
    description: 'The script was developed to help elderly individuals in Lower East Side Manhattan fill out a form to contact the mayor of New York City to oppose the construction of a new mega jail in lower manhattan. The user fills out a google form with their name and email, the data is stored on a google sheet, an api is used to fill out the Contact Mayor form on the cities website with a prewritten message by the Welcome to Chinatown team. The script also uses a rotating set of proxies and solves captchas.',
    video: 'https://i.imgur.com/NDHr8m1.png',
    ghLink: '',
    link: '',
  },
  {
    title: 'NHL Team Database',
    description: `Compare different NHL teams and their stats compared to the relative average to the rest of the league. Sort by different Conferences and divisions`,
    img: NHLSite,
    ghLink: '',
    link: 'https://taupe-valkyrie-484f5c.netlify.app/',
  },
]


function Projects() {
  return (
    <>
      <div className="projects">
        <h1 style={{ color: 'white', fontSize: '42px', marginBottom: 25 }}>My Projects</h1>
      </div>
      <div style={{
        display: 'flex',
        margin: '2rem',
        overflowX: 'scroll'
      }}>
        {
          devProjects.map(project => (
            <ProjectCards project={project} />
          ))
        }
      </div>
    </>
  )
}

export default Projects