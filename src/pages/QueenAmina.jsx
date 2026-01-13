import React from "react";
import HeroSlider from "../components/HeroSlider";
import ProjectLayout from "../components/project-components/ProjectLayout";
import QueenAminaOverview from "../components/project-components/QueenAminaOverview";
import hero1 from "../assets/jpeg/queen-amina-one.jpeg";
import hero2 from "../assets/jpeg/queen-amina-two.jpeg";
import hero3 from "../assets/jpeg/queen-amina-three.jpeg";
import hero4 from "../assets/jpeg/queen-amina-four.jpeg";
import hero5 from "../assets/jpeg/queen-amina-five.jpeg";

function QueenAmina() {
  const projectSlides = [
    {
      image: hero2,
      title: "Queen Amina",
      subtitle: "",
    },
    {
      image: hero1,
      title: "Queen Amina",
      subtitle: "",
    },
    {
      image: hero3,
      title: "Queen Amina",
      subtitle: "",
    },
    {
      image: hero4,
      title: "Queen Amina",
      subtitle: "",
    },
    {
      image: hero5,
      title: "Queen Amina",
      subtitle: "",
    },
  ];

  return (
    <>
      <div>
        <HeroSlider slides={projectSlides} showButtons={false} />
      </div>
      <section className="content">
        <QueenAminaOverview />
      </section>
      <section className="content">
        <ProjectLayout />
      </section>
    </>
  );
}

export default QueenAmina;
