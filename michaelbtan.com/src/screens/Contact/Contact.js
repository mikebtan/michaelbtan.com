import React from 'react'
import './Contact.css'
import Layout from '../../components/Layout/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="input_form">
        <form action="https://formsubmit.co/tanmichael858@gmail.com" method="POST">
          <input type="text" name="_subject" value="New submission!"/>
          <input type="text" name="name" required/>
          <input type="email" name="email" required/>
          <button type="submit">Send</button>
      </form>
      </div>
    </Layout>
  )
}
