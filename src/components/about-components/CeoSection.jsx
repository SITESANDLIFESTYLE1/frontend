import CEO from "../../assets/webp/CEO.webp";
function CeoSection() {
  return (
    <section className="ceo-section containerx">
      <div className="ceo-layout">
        <div className="ceo-text">
          <p className="ceo-quote">
            “With value engineering at the core of our approach, we are
            redefining real estate, delivering unique investment opportunities
            that drive growth and value for our partners.”
          </p>
        </div>

        <div className="ceo-profile">
          <img src={CEO} alt="CEO" className="ceo-image" />
          <h3 className="ceo-name">YAHYA AHMAD RUFAI</h3>
          <p className="ceo-title">CHIEF EXECUTIVE OFFICER</p>
        </div>
      </div>
    </section>
  );
}
export default CeoSection;
