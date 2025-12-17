import React from "react";
import OurServices from "./OurServices";

function OurServicesSection({ values = [] }) {
  return (
    <div className="corevalue-section grid-layout">
      <div className="corevalue-header">
        <h2 className="corevalue-main">
          OUR <span>SERVICES</span>
        </h2>
      </div>

      <div className="ourservices-grid">
        {values.map((item, index) => (
          <OurServices
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default OurServicesSection;
