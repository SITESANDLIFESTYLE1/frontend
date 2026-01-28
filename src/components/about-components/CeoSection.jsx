function CeoSection() {
  return (
    <section className="container ">
      <div className="layout">
        <div className="text">
          <p className="quote">
            “With value engineering at the core of our approach, we are
            redefining real estate, delivering unique investment opportunities
            that drive growth and value for our partners.”
          </p>
        </div>

        <div className="profile">
          <img
            src={
              "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769608319/CEO_qcl6dt.webp"
            }
            alt="CEO"
            className="image"
          />
          <h3 className="name">YAHYA AHMAD RUFAI</h3>
          <p className="title">CHIEF EXECUTIVE OFFICER</p>
        </div>
      </div>
    </section>
  );
}
export default CeoSection;
