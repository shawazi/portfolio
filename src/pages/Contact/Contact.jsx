import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="card">
        <strong><h1>Contact me with your inquiry below</h1></strong>
        <br />
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