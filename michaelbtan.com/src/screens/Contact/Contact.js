import React from 'react'
import './Contact.css'
import Layout from '../../components/Layout/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="contact_container">
        <form action="https://formsubmit.co/tanmichael858@gmail.com" method="POST" className="contact_form">
          <label for="form_name">Name</label>
          <input className="form_inputs" type="text" id="form_name" name="name" required/>
          <label>Subject</label>
          <input className="form_inputs" type="text" name="_subject" required/>
          <label>Email</label>
          <input className="form_inputs" type="email" name="email" required />
          <label>Message</label>
          <input className="form_inputs" type="text-area" name="message" required />
          <button className="submit_form_button" type="submit">Send</button>
        </form>
        <div className="contact_box">
          <h1>Contact Box</h1>
          <h2>Email: tanmichael858@gmail.com</h2>
          <h2>@michaelbtan</h2>
        </div>
      </div>
    </Layout>
  )
}
