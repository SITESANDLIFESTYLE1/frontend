import React from "react";
import { ReactComponent as IconDark } from "../../assets/svg/SL1.svg";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
function Overview() {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="layout">
        <div className="text containerx">
          <h2 className="header primary">WELCOME TO SITES & LIFESTYLE</h2>
          <br />
          <p className="overview-text">
            Sites & Lifestyle Limited was established by the visionary founders
            of the Bilaad Group with a clear purpose: to make home ownership
            seamless, accessible, and aspirational. We specialize in the
            development of serviced plots within welln gated, serene, and family
            friendly communities, thoughtfully designed to redefine modern
            living.
          </p>
          <div className="readmore-buttons">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/about")}
            >
              Learn more
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="layout-image container">
          <IconDark />
          <div className="overview-socials">
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
              href="https://x.com/sitesnlifestyle?s=21&t=n5MWjzhowr31Kmogs_NMSQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
