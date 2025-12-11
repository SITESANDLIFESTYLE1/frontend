import PropertyCard from "../home-components/PropertyCard";

function AllFeaturedProperties({ properties = [] }) {
  const visibleProperties = properties.slice(0, 4);

  return (
    <div className="featured-wrapper">
      <div className="all-property-section">
        {visibleProperties.map((item, index) => (
          <PropertyCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default AllFeaturedProperties;
