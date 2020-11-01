import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialLinks from "../components/socialLinks/SocialLinks";
import ContactImg from "../assets/DSC_0801.JPG";

import "./Contact.css";

const Contact = () => {
  const [msgsent, setmsgsent] = useState(false);
  const [contactInputs, setContactInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    if (e.target != null) {
      emailjs
        .sendForm(
          "service_avb7shg",
          "template_7bgsrtf",
          e.target,
          "user_Seh9J6JIf4oYoVkwaaUqk"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    window.alert("MESSAGE HAS BEEN SENT");
    e.target.reset();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInputs({ [name]: value });
  };

  return (
    <div className="main">
      <div className="row">
        <div className="column">
          <img src={ContactImg} alt="" />
        </div>
        <div className="column">
          <SocialLinks />
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="contact-header">
              <h2>Contact us</h2>
              <p>We will get back to you asap</p>
            </div>
            {/* <input
              type="hidden"
              name="contact_number"
              onChange={(e) => handleChange(e)}
              value={contactInputs.name}
            /> */}
            <div className="form-group">
              <label> Name</label>

              <input
                type="text"
                name="user_name"
                onChange={handleChange}
                value={contactInputs.name}
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label> Email</label>
              <input
                type="email"
                name="user_email"
                onChange={handleChange}
                value={contactInputs.email}
                placeholder="Your Email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Your Message"
                maxLength="500"
                onChange={handleChange}
                value={contactInputs.message}
              />
            </div>
            <div className="submit-sent">
              <input
                className=" submit-button"
                type="submit"
                value="Send  Message"
              />
              {msgsent && <div className=" msg-sent">Message sent!</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
