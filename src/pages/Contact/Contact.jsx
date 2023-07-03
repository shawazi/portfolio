import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="card">
        <h1>Please send a message with your inquiry, offer, or request, and I'll get back to you as soon as possible.</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  )
}

export default Contact