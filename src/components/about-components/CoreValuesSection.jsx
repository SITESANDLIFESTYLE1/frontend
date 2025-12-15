import React from "react";
import CoreValueCard from "./CoreValueCard";

function CoreValuesSection({ values = [] }) {
  return (
    <div className="corevalue-section grid-layout">
      <div className="corevalue-header">
        <h2 className="corevalue-main">
          OUR CORE <span>VALUES</span>
        </h2>
        <p className="corevalue-sub">
          We provide innovative property solutions through trusted partnerships
          and exceptional service.
        </p>
      </div>

      <div className="corevalue-grid">
        {values.map((item, index) => (
          <CoreValueCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CoreValuesSection;
