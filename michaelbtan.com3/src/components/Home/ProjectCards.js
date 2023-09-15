import React from 'react'

function ProjectCards({ project }) {
  const { title, description, img, video, ghLink, link } = project

  return (
    <div style={{
      width: '24rem',
      textAlign: 'center',
      borderColor: '#000000',
      padding: '2rem'
    }}>

      { !video ? 
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img className="project_img" src={img} alt="Site" height="150" width="300" />
      </a>
        :
      <iframe src="https://player.vimeo.com/video/691981366?h=94451f059c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="300" height="150" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="MsgMayor"></iframe>
      }

        <h2 style={{color:'white', marginTop:'2rem'}}>{title}</h2>
        <br />
        <h5 style={{color:'white'}}>{description}</h5>
      </div>
  )
}

export default ProjectCards