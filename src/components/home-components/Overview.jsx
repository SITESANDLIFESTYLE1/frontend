import React from "react";
import { ReactComponent as IconDark } from "../../assets/svg/SL1.svg";
import { useNavigate } from "react-router-dom";

function Overview() {
  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="layout">
        <div className="text containerx">
          <h2 className="header primary">
            <span className="primary">WELCOME TO </span>
            <span className="secondary">SITES & LIFESTYLE</span>
          </h2>
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
              learn more
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="layout-image container">
          <IconDark />
        </div>
      </div>
    </section>
  );
}

export default Overview;
