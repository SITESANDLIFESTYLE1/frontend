import React from "react";

function Overview() {
  return (
    <section className="container ">
      <div className="layout">
        <div className="text containerx">
          <h2 className="header primary">
            <span className="primary">WELCOME TO </span>
            <span className="secondary">SITES & LIFESTYLE</span>
          </h2>
          <p className="overview-text">
            Sites & Lifestyle Limited was established by the visionary founders
            of the Bilaad Group with a clear purpose: to make home ownership
            seamless, accessible, and aspirational. We specialize in the
            development of serviced plots within welln gated, serene, and family
            friendly communities, thoughtfully designed to redefine modern
            living.
            <br />
            <br />
            Beyond residential developments, we also create vibrant commercial
            hubs and luxury hospitality experiences. Each project is carefully
            crafted to blend contemporary amenities with lifestyle driven design
            because we believe every space should inspire the life you deserve.
          </p>
        </div>
        {/* <div className="layout-image container">Youtube Video Section</div> */}
      </div>
    </section>
  );
}

export default Overview;
