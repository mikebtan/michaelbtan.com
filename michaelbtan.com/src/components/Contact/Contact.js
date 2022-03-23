import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact_title">
        <h1>Let's Work Together!</h1>
        <h5>Drop me an e-mail at tanmichael858@gmail.com or simply fill out the form below and I will reply to you soon!</h5>
      </div>
        <form className="contact_form" action="https://formsubmit.co/tanmichael858@gmail.com" method="POST">
          <input className="contact_inputs" type="text" name="name" placeholder="Name" required />
          <input className="contact_inputs" type="email" name="email" placeholder="Email" required />
          <input className="contact_inputs" type="text" name="subject" placeholder="Subject" required />
          <textarea className="contact_input_box" type="text" name="info" placeholder="Your message" required />
          <button className="contact_button" type="submit">Send</button>
        </form>
    </div>
  )
}
