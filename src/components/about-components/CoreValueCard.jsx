import React from "react";

function CoreValueCard({ icon: Icon, title, description }) {
  return (
    <div className="corevalue-card-box">
      {Icon && <Icon className="amenity-icon" />}
      <h3 className="corevalue-title">{title}</h3>
      <p className="corevalue-desc">{description}</p>
    </div>
  );
}

export default CoreValueCard;
