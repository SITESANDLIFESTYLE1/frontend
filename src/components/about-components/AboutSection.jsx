import React from "react";

export default function AboutSection() {
  return (
    <section className="container about-section">
      <div className="about-layout">
        <div className="about-left column">
          <h2 className="header tin-text">
            <span className="primary">ABOUT</span>
            <span className="secoundary"> SITES & LIFESTYLE</span>
          </h2>
          <p className="">
            Sites & Lifestyle Limited was established by the visionary founders
            of the Bilaad Group with a clear purpose: to make home ownership
            seamless, accessible, and aspirational. We specialize in the
            development of serviced plots within well-gated, serene, and
            family-friendly communities, thoughtfully designed to redefine
            modern living.
          </p>
          <p className="">
            Beyond residential developments, we also create vibrant commercial
            hubs and luxury hospitality experiences. Each project is carefully
            crafted to blend contemporary amenities with lifestyle-driven
            design—because we believe every space should inspire the life you
            deserve.
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
