import PropertyCard from "./PropertyCard";
import { useNavigate } from "react-router-dom";

function FeaturedProperties({ properties = [] }) {
  const navigate = useNavigate();

  const visibleProperties = properties.slice(0, 3);

  return (
    <div className="featured-wrapper">
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
