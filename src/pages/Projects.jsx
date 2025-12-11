import React from "react";
import HeroSlider from "../components/HeroSlider";
function Projects() {
  const projectSlides = [
    {
      image: "/images/project-hero.jpg",
      title: "Monrovia Orchards",
      text: "A premium residential community.",
    },
  ];

  return (
    <div className="pageHeader">
      {" "}
      <HeroSlider slides={projectSlides} showButtons={false} />
    </div>
  );
}

export default Projects;
