import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="container border">
        <h1 className="contact">Contact Form</h1>
        <form className="row">
          <label>Name</label>
          <input type="text" name="name" className="form-control" />

          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />

          <label>Message</label>
          <textarea name="message" rows="4" className="form-control" />
          <input
            type="submit"
            value="Send"
            className="form-control btn btn-primary send-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
