import React from "react";
import HeroSlider from "../components/HeroSlider";

function About() {
  const projectSlides = [
    {
      image: "/images/project-hero.jpg",
      title: "About Us",
      text: "",
    },
  ];

  return (
    <div className="pageHeader">
      <HeroSlider slides={projectSlides} showButtons={false} />
    </div>
  );
}

export default About;
