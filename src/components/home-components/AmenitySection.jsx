import React, { useState, useEffect } from "react";
import AmenityCard from "./AmenityCard";

function AmenitySection({ amenities = [] }) {
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setItemsToShow(3);
      } else {
        setItemsToShow(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleAmenities = showAll
    ? amenities
    : amenities.slice(0, itemsToShow);

  return (
    <div className="corevalue-grid">
      {visibleAmenities.map((item, index) => (
        <AmenityCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}

      {amenities.length > itemsToShow && (
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
