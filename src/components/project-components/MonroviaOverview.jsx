import React from "react";
import layout1 from "../../assets/jpeg/layout-one.jpeg";
import layout2 from "../../assets/jpeg/layout-two.jpeg";
import layout3 from "../../assets/jpeg/layout-three.jpeg";

import MonroviaSwiper from "./MonroviaSwiper";

function MonroviaOverview() {
  const Monroviaslides = [
    {
      image: layout1,
    },
    {
      image: layout2,
    },
    {
      image: layout3,
    },
  ];
  return (
    <section className="section containerx">
      <div className="layout">
        <div className="layout-image containerx">
          <MonroviaSwiper slides={Monroviaslides} />
        </div>
        <div className="text containerx">
          <h2 className="header primary">
            Sites And Lifestyle Monrovia Orchards
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
