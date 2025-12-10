function PropertyCard({ image, title, subtitle, link }) {
  return (
    <div className="property-card-box">
      <img src={image} alt={title} className="" />

      <div className="">
        <h3 className="amenity-title">{title}</h3>
        <p className="amenity-desc">{subtitle}</p>
        <a href={link} className="">
          More Details →
        </a>
        <p className="">Monrovia Orchards</p>
      </div>
    </div>
  );
}
export default PropertyCard;
