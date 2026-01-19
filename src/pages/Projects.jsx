import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import monrovia1 from "../assets/jpg/monrovia1.jpg";
import monrovia2 from "../assets/jpg/monrovia2.jpg";
import hero1 from "../assets/png/creek.png";
import hero2 from "../assets/png/SHORE.png";
import hero3 from "../assets/png/spring.png";
import hero4 from "../assets/png/Tide.png";
import queenAmina1 from "../assets/jpeg/queen-amina-one.jpeg";
import queenAmina2 from "../assets/jpeg/queen-amina-two.jpeg";
import queenAmina3 from "../assets/jpeg/queen-amina-three.jpeg";
import queenAmina4 from "../assets/jpeg/queen-amina-four.jpeg";
import queenAmina5 from "../assets/jpeg/queen-amina-five.jpeg";

const monroviaSlides = [monrovia1, monrovia2, hero2, hero1, hero3, hero4];
const queenAminaSlides = [
  queenAmina1,
  queenAmina2,
  queenAmina3,
  queenAmina4,
  queenAmina5,
];

function Projects() {
  const [monroviaSlide, setMonroviaSlide] = useState(0);
  const [queenAminaSlide, setQueenAminaSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMonroviaSlide((prev) => (prev + 1) % monroviaSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQueenAminaSlide((prev) => (prev + 1) % queenAminaSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const projectSlides = [
    {
      image: monrovia1,
      title: "Projects",
      subtitle: "Monrovia Orchards",
    },
    {
      image: queenAmina1,
      title: "Projects",
      subtitle: "Queen Amina",
    },
    {
      image: monrovia2,
      title: "Projects",
      subtitle: "Monrovia Orchards",
    },
    {
      image: queenAmina2,
      title: "Projects",
      subtitle: "Queen Amina",
    },
    {
      image: queenAmina3,
      title: "Projects",
      subtitle: "Queen Amina",
    },
  ];

  return (
    <>
      <div>
        <HeroSlider slides={projectSlides} showButtons={false} />
      </div>

      <main className="container secondary-bg">
        <h2 className="header primary">
          <span className="primary"> Featured</span>
          <span className="secondary"> Projects</span>

          <br />
          <br />
        </h2>
        <div className="categories">
          <div>
            <Link to="/projects/queenAmina">
              <img
                src={queenAminaSlides[queenAminaSlide]}
                alt="Queen Amina"
                className="categoryImg"
              />{" "}
              <br />
              <br />
              <h2 className="categoryName primary">Queen Amina</h2>
            </Link>
            <br />
            <p className="amenity-desc">
              Set on 8.5 hectares in Maitumbi, behind Hill-Top Model School,
              Minna, Niger State, Queen Amina Estate is a well-planned community
              of 56 units designed for quality living. Featuring a football
              pitch, children’s playground, and other lifestyle amenities, it
              offers a calm, family-friendly environment built for comfort and
              lasting value.
            </p>
            <br />
            <Link to="/projects/queenAmina" className="more-details">
              More Details →
            </Link>
          </div>
          <div>
            <Link to="/projects/monrovia">
              <img
                src={monroviaSlides[monroviaSlide]}
                alt="Monrovia Orchards"
                className="categoryImg"
              />
              <br />
              <br />
              <h2 className="categoryName primary">Monrovia Orchards</h2>
            </Link>
            <br />

            <p className="amenity-desc">
              Monrovia Orchards is a serene, family-focused residential
              community in Idu Sabo, set on 7.87 hectares behind Brains &
              Hammers City. Comprising 163 thoughtfully planned homes, it blends
              modern living with sustainability, lush orchards, and generous
              green spaces to offer a calm, nature-inspired lifestyle.
            </p>
            <br />
            <Link to="/projects/monrovia" className="more-details">
              More Details →
            </Link>
          </div>
        </div>
        <br />
        <br />
        <br />
      </main>

      <br />
    </>
  );
}

export default Projects;
