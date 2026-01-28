import React from "react";
import Chairman from "../../assets/webp/Chairman.webp";
import Musa from "../../assets/webp/Musa.webp";

function BoardOfDirectors() {
  const directors = [
    {
      name: "ARCHITECT AHMED MUSA",
      title: "CHAIRMAN",
      image: Chairman,
    },
    {
      name: "DR. SADIQ SULEIMAN ABDULLAH",
      title: "NON-EXECUTIVE DIRECTOR",
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769610640/DrSadiq_kddxhx.webp",
    },
    {
      name: "ROSS OLUYEDE",
      title: "NON-EXECUTIVE DIRECTOR",
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769610761/Ross_x6obtk.webp",
    },
    {
      name: "ALIYU ALIYU",
      title: "INDEPENDENT DIRECTOR",
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769610549/Aliyu_bwenvz.webp",
    },
    {
      name: "ABDULLAHI IDRIS UMAR",
      title: "NON-EXECUTIVE DIRECTOR",
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769610406/Abdullahi_nslxw5.webp",
    },
    {
      name: "HON. KHAMISU AHMED MAILANTARKI",
      title: "NON-EXECUTIVE DIRECTOR",
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769610700/HonKhamisu_wgswvr.webp",
    },
    {
      name: "MUSA MOHAMMED KOSHE",
      title: "EXECUTIVE DIRECTOR",
      image: Musa,
    },
    {
      name: "MUSA AHIJO",
      title: "EXECUTIVE DIRECTOR",
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769611029/musa_l2z5ak.jpg",
    },
  ];

  return (
    <section className="directors-section">
      <h2 className="directors-heading">
        <span className="primary">BOARD OF</span>
        <span className="secondary"> DIRECTORS</span>
      </h2>

      <div className="directors-grid">
        {directors.map((director, index) => (
          <div className="director-card" key={index}>
            <img
              src={director.image}
              alt={director.name}
              className="director-image"
            />
            <h3 className="director-name">{director.name}</h3>
            <p className="director-title">{director.title}</p>
            <br />
            <br />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoardOfDirectors;
