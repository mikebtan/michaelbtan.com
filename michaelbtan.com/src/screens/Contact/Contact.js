import React from 'react'
import './Contact.css'
import Layout from '../../components/Layout/Layout'

export default function Contact() {
  return (
    <Layout>
      <div className="contact_container">
        <div className="contact_box">
          <h1 className="contact_header">Contact</h1>
        </div>
        <form action="https://formsubmit.co/tanmichael858@gmail.com" method="POST" className="contact_form">
          <label className="form_labels" for="form_name">Name</label>
          <input className="form_inputs" type="text" id="form_name" name="name" required/>
          <label className="form_labels">Subject</label>
          <input className="form_inputs" type="text" name="_subject" required/>
          <label className="form_labels">Email</label>
          <input className="form_inputs" type="email" name="email" required />
          <label className="form_labels">Message</label>
          <textarea className="form_inputs_message" type="textarea" height="500px" name="message" required />
          <button className="submit_form_button" type="submit">Send</button>
        </form>
        </div>
    </Layout>
  )
}
