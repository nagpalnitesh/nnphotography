import React, { useState } from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/DSC_2725.jpeg";
import HeaderImg2 from "../assets/images/DSC_9885.jpg";
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

  const handleChange = (text) => (e) => {
    // const { name, value } = e.target;
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend.nnphotography.in/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Handle success, e.g., show a success message.
      } else {
        console.error("Error sending email");
        // Handle error, e.g., show an error message.
      }
    } catch (error) {
      console.error("Error sending email", error);
      // Handle error, e.g., show an error message.
    }
  };

  const isEmailFilled = () => {
    return formData.email.trim() !== "";
  };

  return (
    <div className="gallery">
      <Navbar activeMenu="Contact" />
      <div className="overlay"></div>
      <div className="banner">
        <img src={HeaderImg} alt="Backgrounds" />
      </div>
      {/* TODO: parallax background with overlay */}
      <div className="gallery-page-header">
        <PageHeader
          pageName={"Contact Me"}
          // headerStyle={"gallery-header-img"}
          headerImg={HeaderImg2}
        />
      </div>
      {/* Contact-Tagline */}
      <div className="gallery-section-text">
        {/* <p>Captured Moments, Framed Eternally</p> */}
        <hr />
        <p>Let's Chat, Let's Create, Let's Capture</p>
        <hr />
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="e-text">
          Email:{" "}
          <a
            href="mailto:niteshnagpalphotography@gmail.com"
            className="footer-social-link w-inline-bock "
          >
            <div className="email-text">niteshnagpalphotography@gmail.com</div>
            <div className="underline footer-social-underline"></div>
          </a>
        </div>
      </div>

      {/* COntact FORM */}
      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit}>
          <p className="field required half">
            <input
              className="text-input"
              id="first-name"
              name="first-name"
              required="<%= true %>"
              type="text"
              value={formData.first_name}
              onChange={handleChange("first_name")}
            />
            <label className="label required" htmlFor="name">
              First Name (required)
            </label>
          </p>
          <p className="field required half">
            <input
              className="text-input"
              id="last-name"
              name="last-name"
              value={formData.last_name}
              onChange={handleChange("last_name")}
              required="<%= true %>"
              type="text"
            ></input>
            <label className="label required" htmlFor="name">
              Last Name (required)
            </label>
          </p>
          <p
            className={`field required half ${
              isEmailFilled() ? "email-invalid" : ""
            }`}
            style={{ marginLeft: "0em", marginRight: "2em" }}
          >
            <input
              className="text-input"
              id="email"
              name="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
            ></input>
            <label className="label" htmlFor="email">
              E-mail (required)
            </label>
          </p>
          <p className="field required half">
            <input
              className="text-input"
              id="phone-number"
              name="phone-number"
              required="<%= true %>"
              type="tel"
              value={formData.phone}
              onChange={handleChange("phone")}
            ></input>
            <label className="label" htmlFor="phone-number">
              Phone Number
            </label>
          </p>
          <p className="field">
            <input
              className="textarea"
              // cols="50"
              id="subject"
              name="subject"
              required="<%= true %>"
              // rows="4"
              value={formData.subject}
              onChange={handleChange("subject")}
            />
            <label className="label" htmlFor="subject">
              Subject
            </label>
          </p>
          <p className="field">
            <textarea
              className="textarea"
              cols="50"
              id="message"
              name="message"
              required="<%= true %>"
              rows="4"
              value={formData.message}
              onChange={handleChange("message")}
            ></textarea>
            <label className="label" htmlFor="message">
              Message
            </label>
          </p>
          <p className="field">
            <input
              className="button"
              type="submit"
              value="Send message"
            ></input>
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
