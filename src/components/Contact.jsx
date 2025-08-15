import React from 'react'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("Message sent!"); // optional feedback
    e.target.reset(); // clear all fields
  }

  return (
    <div className="contact-bg">
      <section id="contact" className="contact-page">
        <h2>Contact Us</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
