import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Portolio.css';


export default function Portfolio() {

  const projects = [
    {
      img: "",
      title: "",
      description: "",
      stack: "",
    },
    {
      img: "",
      title: "",
      description: "",
      stack: "",
    },
    {
      img: "",
      title: "",
      description: "",
      stack: "",
    },
  ]


  return (
    <Layout>
      <div className="portfolio_container">
        <div className="project_image">
        </div>
        <div className="project_details">
          <h1 className="project_title">title</h1>
          <h3 className="project_description">descrip</h3>
          <h3 className="project_stack">stack</h3>
        </div>
      </div>
    </Layout>
  )
}
