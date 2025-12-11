import React from "react";
import { useNavigate } from "react-router-dom";
// import { ReactComponent as Icon } from "../assets/svg/SL1.svg";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-col footer-logo">
          {/* <Icon className="navbar-icon" /> */}

          <h2 className="logo-placeholder">Sites & Lifestyle</h2>

          <p className="footer-license">Licensed Real Estate – DRE #00000.</p>
          <p className="footer-description">
            Top Tier Real Estate Residential And Commercial Serviced Plots.
          </p>
        </div>

        {/* Our Company */}
        <div className="footer-col">
          <h4 className="footer-title">Our Company</h4>
          <ul>
            <li>Serviced Plots</li>
            <li>Affiliate Portal</li>
            <li>Available Properties</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Discover Our Projects */}
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

        {/* Contact Information */}
        <div className="footer-col">
          <h4 className="footer-title">Contact Information</h4>

          <p className="footer-address">
            Suite 001, Ground Floor, Adamawa Plaza, Central Business Districts,
            Abuja.
          </p>

          <p className="footer-phone">0700-011-1111</p>
          <p className="footer-email">info@sitesandlifestyle.com</p>
        </div>

        {/* Newsletter */}
        <div className="footer-col ">
          <h4 className="footer-title">Stay Connected for Insights.</h4>

          <div className="newsletter-input-wrapper">
            <input
              type="email"
              placeholder="Your Email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">🔔</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 @ SitesAndLifestyle. All Rights Reserved</p>
        <div className="footer-bottom-links">
          <a href="/">Term & Condition</a>
          <a href="/">Policy & Privacy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
