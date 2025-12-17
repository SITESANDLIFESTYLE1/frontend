import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { subscribeNewsletter } from "../api";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line
      const res = await subscribeNewsletter({ email });
      toast.success("Your subscribing was successfully");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col footer-logo">
          {/* <Icon className="navbar-icon" /> */}

          <h2 className="logo-placeholder">Sites & Lifestyle</h2>

          <p className="footer-license">Licensed Real Estate – DRE #00000.</p>
          <p className="footer-description">
            Building Serviced Communities for Sustainable Living.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Our Company</h4>
          <ul>
            <li
              onClick={() => {
                navigate("/projects");
              }}
            >
              Serviced Plots
            </li>
            <li
              onClick={() => {
                navigate("/affiliate");
              }}
            >
              Affiliate Portal
            </li>
            <li
              onClick={() => {
                navigate("/projects");
              }}
            >
              Available Properties
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Discover Our Projects</h4>
          <ul>
            <li
              onClick={() => {
                navigate("/projects");
              }}
            >
              Monrovia Orchards
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Contact Information</h4>

          <p className="footer-address">
            Suite 001, Ground Floor, Adamawa Plaza, Central Business Districts,
            Abuja.
          </p>

          <p className="footer-phone">0700-011-1111</p>
          <p className="footer-email">info@sitesandlifestyle.com</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/sitesandlifestyle/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/company/sites-nd-lifestyle/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/people/Sites-and-lifestyle/61571418703102/?sk=about"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div className="footer-col ">
          <h4 className="footer-title">Stay Connected for Insights.</h4>

          <form onSubmit={handleSubscribe} className="newsletter-input-wrapper">
            <input
              type="email"
              placeholder="Your Email"
              className="newsletter-input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-btn">
              🔔
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} @ SitesAndLifestyle. All Rights
          Reserved
        </p>
        <div className="footer-bottom-links">
          <a href="/">Term & Condition</a>
          <a href="/">Policy & Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
