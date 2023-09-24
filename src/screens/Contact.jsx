import React, { useState } from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/nature-1.jpg";
// import HeaderImg2 from "../assets/images/nature-2.jpg";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isEmailFilled = () => {
    return formData.email.trim() !== "";
  };

  console.log(isEmailFilled());

  return (
    <div className="gallery">
      <Navbar />
      {/* TODO: parallax background with overlay */}
      <div className="gallery-page-header">
        <PageHeader
          pageName={"Contact Me"}
          // headerStyle={"gallery-header-img"}
          headerImg={HeaderImg}
        />
      </div>
      {/* <div className="gallery-header">
        <div className="gallery-header-img">
          <h1 className="gallery-header-text">Gallery</h1>
        </div>
      </div> */}
      {/* Contact-Tagline */}
      <div className="gallery-section-text">
        {/* <p>Captured Moments, Framed Eternally</p> */}
        <hr />
        <p>Let's Chat, Let's Create, Let's Capture</p>
        <hr />
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="copyright-text">
          Email:{" "}
          <a
            href="mailto:niteshnagpal@outlook.com"
            className="footer-link w-inline-block"
          >
            niteshnagpal@outlook.com
          </a>
        </div>
      </div>

      {/* COntact FORM */}
      <div className="contact-form">
        <form class="form">
          <p class="field required half">
            <input
              class="text-input"
              id="first-name"
              name="first-name"
              required="<%= true %>"
              type="text"
            />
            <label class="label required" for="name">
              First Name (required)
            </label>
          </p>
          <p class="field required half">
            <input
              class="text-input"
              id="last-name"
              name="last-name"
              required="<%= true %>"
              type="text"
            ></input>
            <label class="label required" for="name">
              Last Name (required)
            </label>
          </p>
          <p
            class={`field required half ${
              isEmailFilled() ? "email-invalid" : ""
            }`}
            style={{ marginLeft: "0em", marginRight: "2em" }}
          >
            <input
              class="text-input"
              id="email"
              name="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
            <label className="label" for="email">
              E-mail (required)
            </label>
          </p>
          <p class="field required half">
            <input
              class="text-input"
              id="phone-number"
              name="phone-number"
              required="<%= true %>"
              type="tel"
            ></input>
            <label class="label" for="phone-number">
              Phone Number
            </label>
          </p>
          <p class="field">
            <input
              class="textarea"
              // cols="50"
              id="subject"
              name="subject"
              required="<%= true %>"
              // rows="4"
            />
            <label class="label" for="subject">
              Subject
            </label>
          </p>
          <p class="field">
            <textarea
              class="textarea"
              cols="50"
              id="message"
              name="message"
              required="<%= true %>"
              rows="4"
            ></textarea>
            <label class="label" for="message">
              Message
            </label>
          </p>
          <p class="field">
            <input class="button" type="submit" value="Send message"></input>
          </p>
        </form>
      </div>
      {/* FOOTER */}
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
