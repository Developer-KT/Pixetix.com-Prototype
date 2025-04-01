import React from "react";
import { useEffect, useRef } from "react";
import "./Contact.css";
import ParallaxSquares from "../images/parallax-squares.png";
import Dots from "../images/dots-svg.png";
import { Link } from "react-router";

export default function ContactSection() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  function sendMail(e) {
    e.preventDefault();

    var params = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    const serviceID = "service_j3gax24";
    const templateID = "template_otj6zsd";

    emailjs
      .send(serviceID, templateID, params)
      .then((res) => {
        console.log(res);
        alert("Your message has been sent successfully");

        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch((err) => console.log(err));
  }

  return (
    <section className="form-section-cp contact-homepage">
      <div className="form">
        <form onSubmit={sendMail}>
          <label htmlFor="fname">Your name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Full name"
            className="input"
            ref={nameRef}
          />
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="input"
            ref={emailRef}
          />
          <label htmlFor="your-message">How we can help:</label>
          <textarea
            name="your-message"
            id="message"
            cols="40"
            rows="10"
            placeholder="How can we help you?"
            className="message"
            ref={messageRef}
          ></textarea>
          <button type="submit" className="send-button">
            Get Started
          </button>
        </form>
      </div>
      <div className="more-contact-details">
        <h1>
          Let us know what you need. <br />
        </h1>
        <br />
        <p>
          <br />
          We want to hear all about your business and how we can help elevate it
          with winning strategies through digital excellence. Let's talk about
          your project!
        </p>
        <br />
        <div className="contact-location">
          <h3>Contact sales:</h3>
          <p>
            <span></span>&nbsp;&nbsp;&nbsp;info@pixetix.com
          </p>
          <p>&nbsp;&nbsp;&nbsp;064 061 6750</p>
          {/* <p>
            <i>
              &nbsp;&nbsp;&nbsp;Or enter your phone number and we'll call back
              within 20 minutes
            </i>
          </p> */}
          <br />
          <h3>Find us:</h3>
          <p>
            <span></span>&nbsp;&nbsp;&nbsp;Cape Town: City Centre, 5
            Buitengracht St
          </p>
          {/* <p>&nbsp;&nbsp;&nbsp;Johannesburg: Midrand, 26 Woodbridge Rd</p> */}
        </div>
      </div>
    </section>
  );
}
