import React from "react";
import monrovia1 from "../../assets/jpg/monrovia1.jpg";
import monrovia2 from "../../assets/jpg/monrovia2.jpg";
import monrovia4 from "../../assets/jpeg/monrovia4.jpeg";
import monrovia3 from "../../assets/jpeg/monrovia3.jpeg";
import MonroviaSwiper from "./MonroviaSwiper";
function MonroviaOverview() {
  const Monroviaslides = [
    {
      image: monrovia1,
    },
    {
      image: monrovia2,
    },
    {
      image: monrovia3,
    },
    {
      image: monrovia4,
    },
  ];
  return (
    <section className=" containerx">
      <div className="layout">
        <div className="layout-image containerx">
          <MonroviaSwiper slides={Monroviaslides} />
        </div>

        <div className="text section">
          <h2 className="header">
            <span className="primary"> Sites And Lifestyle</span>
            <span className="secondary"> Monrovia Orchards</span>
          </h2>

          <p className="quote">
            Nestled on 7.87 hectares in the serene Idu Sabo district, just
            behind Brains & Hammers City, Monrovia Orchards is a thoughtfully
            planned community of 163 units designed for sustainable living.
            Surrounded by lush orchards and green spaces, this family-centric
            haven offers a refreshing blend of nature, comfort, and community,
            crafted for those who value a contemporary lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MonroviaOverview;
