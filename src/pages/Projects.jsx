import React from "react";
import HeroSlider from "../components/HeroSlider";
import AllFeaturedProperties from "../components/project-components/AllFeaturedProperties";
import ProjectLayout from "../components/project-components/ProjectLayout";
import MonroviaOverview from "../components/project-components/MonroviaOverview";
import hero1 from "../assets/png/creek.png";
import hero2 from "../assets/png/SHORE.png";
import hero3 from "../assets/png/spring.png";
import hero4 from "../assets/png/Tide.png";
import creek from "../assets/pdf/creek.pdf";
import shore from "../assets/pdf/shore.pdf";
import Spring from "../assets/pdf/Spring.pdf";
import Tide from "../assets/pdf/Tide.pdf";

function Projects() {
  const properties = [
    {
      image: hero1,
      title: "Creek – 190 SQM",
      subtitle: "3 Bedroom Townhouse",
      link: creek,
    },
    {
      image: hero2,
      title: "Shore - 500SQM",
      subtitle: "5 Bedroom Villa +2 Rooms Chalet +Maid’s room",
      link: shore,
    },
    {
      image: hero3,
      title: "Spring – 250 SQM",
      subtitle: "4 Bedroom Twin Villa",
      link: Spring,
    },
    {
      image: hero4,
      title: "TIDE – 400 SQM",
      subtitle: "4 Bedroom Villa +Maid’s room",
      link: Tide,
    },
  ];
  const projectSlides = [
    {
      image: hero2,
      title: "Monrovia Orchards",
      subtitle: "",
    },
    {
      image: hero1,
      title: "Monrovia Orchards",
      subtitle: "",
    },
    {
      image: hero3,
      title: "Monrovia Orchards",
      subtitle: "",
    },
    {
      image: hero4,
      title: "Monrovia Orchards",
      subtitle: "",
    },
  ];

  return (
    <>
      <div>
        <HeroSlider slides={projectSlides} showButtons={false} />
      </div>
      <section className="content">
        <MonroviaOverview />
      </section>
      <section className="content">
        <AllFeaturedProperties properties={properties} />
      </section>
      <section className="content">
        <ProjectLayout />
      </section>
    </>
  );
}

export default Projects;
