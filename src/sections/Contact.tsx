"use client";
import { FC } from "react";
import Image from "next/image";
import "../styles/Contact.css";
import fb from "@/assets/images/fb.png";
import logoig from "@/assets/images/logo-ig.png";

const Contact: FC = () => {
  return (
    <div id="contact" className="contact-container">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-lg mb-4">
        reach me on my socials or just fill the form below, cheers :D!
      </p>
      <div
        className="social-icons"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          gap: "20px", // Add gap between icons
        }}
      >
        <a
          href="https://facebook.com/adlinoor28"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={fb.src} alt="Facebook" width={48} height={48} />{" "}
          {/* Increase size */}
        </a>
        <a
          href="https://instagram.com/adlinoor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={logoig.src} alt="Instagram" width={48} height={48} />{" "}
          {/* Increase size */}
        </a>
      </div>
      <form className="contact-form">
        <label htmlFor="name" className="contact-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="contact-input"
        />
        <label htmlFor="email" className="contact-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="contact-input"
        />
        <label htmlFor="message" className="contact-label">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Your Message"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
