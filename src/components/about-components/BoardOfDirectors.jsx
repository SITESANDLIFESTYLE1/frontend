import React from "react";
import Chairman from "../../assets/webp/Chairman.webp";
import DrSadiq from "../../assets/webp/DrSadiq.webp";
import Ross from "../../assets/webp/Ross.webp";
import Aliyu from "../../assets/webp/Aliyu.webp";
import Abdullahi from "../../assets/webp/Abdullahi.webp";
import HonKhamisu from "../../assets/webp/HonKhamisu.webp";
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
      image: DrSadiq,
    },
    {
      name: "ROSS OLUYEDE",
      title: "NON-EXECUTIVE DIRECTOR",
      image: Ross,
    },
    {
      name: "ALIYU ALIYU",
      title: "INDEPENDENT DIRECTOR",
      image: Aliyu,
    },
    {
      name: "ABDULLAHI IDRIS UMAR",
      title: "NON-EXECUTIVE DIRECTOR",
      image: Abdullahi,
    },
    {
      name: "HON. KHAMISU AHMED MAILANTARKI",
      title: "NON-EXECUTIVE DIRECTOR",
      image: HonKhamisu,
    },
    {
      name: "MUSA MOHAMMED KOSHE",
      title: "EXECUTIVE DIRECTOR",
      image: Musa,
    },
    {
      name: "MUSA AHIJO",
      title: "EXECUTIVE DIRECTOR",
      image: "",
    },
  ];

  return (
    <section className="directors-section containerx">
      <h2 className="directors-heading">BOARD OF DIRECTORS</h2>

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
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoardOfDirectors;
