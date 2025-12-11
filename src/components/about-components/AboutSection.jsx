import React from "react";

export default function AboutSection() {
  return (
    <section className="container about-section">
      <div className="about-layout">
        <div className="about-left column">
          <h2 className="header tin-text">
            <span className="welcome">ABOUT</span>
            <span className="sites">SITES & LIFESTYLE</span>
          </h2>
          <p className="">
            We also offer commercial real estate developments and luxury
            hospitality projects that incorporate modern lifestyle amenities,
            complement contemporary living and provide a unique quality of life.
          </p>
          <p className="">
            Sites and Lifestyle is a subsidiary of the Bilad Group aimed at
            easing the process of home ownership to a wider population through
            the development of serviced plots within gated, serene and family
            friendly communities.
          </p>
        </div>

        <div className="about-right">
          <div className="amenity-card-box">
            <h4 className="amenity-title">VISION</h4>
            <p className="amenity-desc">
              To be the leading firm in the provision of exceptional real estate
              and modern lifestyle features that offer premium lifestyle
              solutions.
            </p>
          </div>

          <div className="amenity-card-box">
            <h4 className="amenity-title">MISSION</h4>
            <p className="amenity-desc">
              To provide our partners with outstanding communities through
              strategic alliances, innovative planning, and excellent service
              delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
