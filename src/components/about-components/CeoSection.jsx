import CEO from "../../assets/webp/CEO.webp";
function CeoSection() {
  return (
    <section className="section containerx">
      <div className="layout">
        <div className="text">
          <p className="quote">
            “With value engineering at the core of our approach, we are
            redefining real estate, delivering unique investment opportunities
            that drive growth and value for our partners.”
          </p>
        </div>

        <div className="profile">
          <img src={CEO} alt="CEO" className="image" />
          <h3 className="cname">YAHYA AHMAD RUFAI</h3>
          <p className="ctitle">CHIEF EXECUTIVE OFFICER</p>
        </div>
      </div>
    </section>
  );
}
export default CeoSection;
