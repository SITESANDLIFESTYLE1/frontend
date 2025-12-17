import React from "react";

function OurServices({ icon: Icon, title, description }) {
  return (
    <div className="corevalue-card-box">
      <h3 className="corevalue-title">{title}</h3>
      <p className="corevalue-desc">{description}</p>
    </div>
  );
}

export default OurServices;
