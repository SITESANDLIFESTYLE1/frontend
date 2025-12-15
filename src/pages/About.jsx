import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/about-components/AboutSection";
import CoreValuesSection from "../components/about-components/CoreValuesSection";
import CeoSection from "../components/about-components/CeoSection";
import BoardOfDirectors from "../components/about-components/BoardOfDirectors";
import { FiHeart, FiZap, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";

function About() {
  const values = [
    {
      icon: FiHeart,
      title: "PASSION",
      description: "We bring genuine enthusiasm...",
    },
    {
      icon: FiZap,
      title: "INNOVATION",
      description: "We deliver smart, forward-thinking solutions...",
    },
    {
      icon: FiAward,
      title: "EXCELLENCE",
      description: "We hold ourselves to high standards...",
    },
    {
      icon: FiUsers,
      title: "COLLABORATION",
      description: "We work closely with clients...",
    },
    {
      icon: FiTrendingUp,
      title: "EFFICIENCY",
      description: "We minimize delays and deliver quickly...",
    },
  ];
  const projectSlides = [
    {
      image: "/images/project-hero.jpg",
      title: "About Us",
      text: "",
    },
  ];

  return (
    <>
      <section className="pageHeader">
        <HeroSlider slides={projectSlides} showButtons={false} />
      </section>
      <section className="container">
        <AboutSection />
      </section>
      <section className="content">
        <CoreValuesSection values={values} />
      </section>
      <section className="content">
        <CeoSection />
      </section>
      <section className="content">
        <BoardOfDirectors />
      </section>
    </>
  );
}

export default About;
