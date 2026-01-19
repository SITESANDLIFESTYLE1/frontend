import React from "react";
import layout1 from "../../assets/jpeg/queen-amina-one.jpeg";
import layout2 from "../../assets/png/queenamina2.png";
import layout4 from "../../assets/png/queenamina3.png";
import layout3 from "../../assets/jpeg/queen-amina-three.jpeg";
import layout5 from "../../assets/jpeg/queen-amina-five.jpeg";

import QueenAminaSwiper from "./MonroviaSwiper";

function QueenAminaOverview() {
  const QueenAminaslides = [
    {
      image: layout1,
    },
    {
      image: layout2,
    },
    {
      image: layout3,
    },
    {
      image: layout4,
    },
    {
      image: layout5,
    },
  ];
  return (
    <section className="containerx">
      <div className="layout">
        <div className="layout-image containerx">
          <QueenAminaSwiper slides={QueenAminaslides} />
        </div>
        <div className="text section">
          <h2 className="header">
            <span className="primary"> Sites And Lifestyle</span>
            <span className="secondary"> Queen Amina</span>
          </h2>
          <p className="quote">
            Set on 8.5 hectares in Maitumbi, behind Hill-Top Model School,
            Minna, Niger State, Queen Amina Estate is a well-planned community
            of 56 units created for quality living. With features such as a
            football pitch, children’s playground, and other lifestyle
            amenities, it delivers a calm, family-friendly environment built for
            comfort and lasting value.
          </p>
        </div>
      </div>
    </section>
  );
}

export default QueenAminaOverview;
