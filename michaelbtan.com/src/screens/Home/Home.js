import React from 'react'
import Layout from '../../components/Layout/Layout'
import Header from '../../components/Header/Header.js'
import About from '../../components/About/About.js'
import Projects from '../../components/Projects/Projects.js'
import Contact from '../../components/Contact/Contact.js'


export default function Home() {
  return (
    <Layout>
      <div>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}
