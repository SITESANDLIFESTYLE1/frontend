// Updated AmenitySection.jsx
import React, { useState } from "react";
import AmenityCard from "./AmenityCard";

function AmenitySection({ amenities = [] }) {
  const [showAll, setShowAll] = useState(false);

  const visibleAmenities = showAll ? amenities : amenities.slice(0, 6);

  return (
    <div className="amenity-section grid-layout">
      {visibleAmenities.map((item, index) => (
        <AmenityCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}

      {amenities.length > 6 && (
        <div className="view-more-wrapper">
          <button
            onClick={() => setShowAll(!showAll)}
            className="view-more-btn"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default AmenitySection;
