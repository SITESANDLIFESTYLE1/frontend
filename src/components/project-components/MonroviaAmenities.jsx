import AmenityCard from "../home-components/AmenityCard";

function MonroviaAmenities({ amenities = [] }) {
  return (
    <>
      <div>
        <h2 className="corevalue-header tin-text">
          <span className="primary">Amenities at </span>
          <span className="secondary">Monrovia Orchard</span>
        </h2>
        <p>
          Thoughtfully curated features designed to enhance everyday living,
          blending comfort, convenience, and modern lifestyle needs within a
          serene environment.
        </p>
      </div>
      <div className="amenity-grid">
        {amenities.map((item, index) => (
          <AmenityCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default MonroviaAmenities;
