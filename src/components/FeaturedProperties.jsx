import PropertyCard from "./PropertyCard";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeaturedProperties({ properties = [] }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const visibleProperties = showAll ? properties : properties.slice(0, 3);

  return (
    <div className="featured-wrapper">
      <h2 className="featured-title">
        FEATURED <span>PROPERTIES</span>
      </h2>

      <div className="property-section">
        {visibleProperties.map((item, index) => (
          <PropertyCard key={index} {...item} />
        ))}
      </div>

      <div className="view-more-wrapper">
        {properties.length > 3 && (
          <button
            className="view-more-btn"
            onClick={() => navigate("/projects")}
          >
            View All Properties
          </button>
        )}
      </div>
    </div>
  );
}
export default FeaturedProperties;
