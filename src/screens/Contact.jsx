import React, { useState } from "react";
import Navbar from "../components/Navbar";

import HeaderImg from "../assets/images/DSC_2725.jpeg";
import HeaderImg2 from "../assets/images/DSC_9885.jpg";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import { CONTACT_EMAIL, sendContactMessage } from "../utils/contact";
import usePageMeta from "../seo/usePageMeta";

const EMPTY_FORM = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

// status: "idle" | "sending" | "success" | "error"
const Contact = () => {
  usePageMeta("/contact-me");
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
    if (status === "success") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      await sendContactMessage(formData);
      setFormData(EMPTY_FORM);
      setStatus("success");
    } catch (error) {
      console.error("Error sending email", error);
      setStatus("error");
    }
  };

  const isEmailFilled = () => {
    return formData.email.trim() !== "";
  };

  const sending = status === "sending";

  return (
    <div className="gallery">
      <Navbar activeMenu="Contact" />
      <div className="overlay"></div>
      <div className="banner">
        <img src={HeaderImg} alt="" />
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
            href={`mailto:${CONTACT_EMAIL}`}
            className="footer-social-link w-inline-bock "
          >
            <div className="email-text">{CONTACT_EMAIL}</div>
            <div className="underline footer-social-underline"></div>
          </a>
        </div>
      </div>

      {/* COntact FORM */}
      <div className="contact-form">
        <form className="form" onSubmit={handleSubmit} aria-busy={sending}>
          <p className="field required half">
            <input
              className="text-input"
              id="first-name"
              name="first-name"
              required
              type="text"
              autoComplete="given-name"
              value={formData.first_name}
              onChange={handleChange("first_name")}
            />
            <label className="label required" htmlFor="first-name">
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
              required
              type="text"
              autoComplete="family-name"
            ></input>
            <label className="label required" htmlFor="last-name">
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
              autoComplete="email"
              value={formData.email}
              onChange={handleChange("email")}
            ></input>
            <label className="label" htmlFor="email">
              E-mail (required)
            </label>
          </p>
          <p className="field optional half">
            <input
              className="text-input"
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange("phone")}
            ></input>
            <label className="label" htmlFor="phone-number">
              Phone Number (optional)
            </label>
          </p>
          <p className="field">
            <input
              className="textarea"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange("subject")}
            />
            <label className="label" htmlFor="subject">
              Subject (required)
            </label>
          </p>
          <p className="field">
            <textarea
              className="textarea"
              cols="50"
              id="message"
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange("message")}
            ></textarea>
            <label className="label" htmlFor="message">
              Message (required)
            </label>
          </p>
          <div className="form-status-wrapper">
            <p className="form-status" role="status" aria-live="polite">
              {sending && "Sending your message…"}
              {status === "success" &&
                "Thank you, your message has been sent. I'll get back to you soon."}
            </p>
            <p className="form-status form-status-error" role="alert">
              {status === "error" && (
                <>
                  Sorry, your message couldn't be sent. Your text is still
                  here, so you can try again or email me directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </>
              )}
            </p>
          </div>
          <p className="field">
            <button className="button" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send message"}
            </button>
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
