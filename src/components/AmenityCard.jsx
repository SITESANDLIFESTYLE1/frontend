// Updated AmenityCard.jsx
import React from "react";

function AmenityCard({ icon: Icon, title, description }) {
  return (
    <div className="amenity-card-box">
      {Icon && <Icon className="amenity-icon" />}
      <h3 className="amenity-title">{title}</h3>
      <p className="amenity-desc">{description}</p>
    </div>
  );
}

export default AmenityCard;
