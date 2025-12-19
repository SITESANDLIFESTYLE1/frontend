import React from "react";
import HeroSlider from "../components/HeroSlider";
import AboutSection from "../components/about-components/AboutSection";
import CoreValuesSection from "../components/about-components/CoreValuesSection";
import CeoSection from "../components/about-components/CeoSection";
import BoardOfDirectors from "../components/about-components/BoardOfDirectors";
import { FiHeart, FiZap, FiAward, FiUsers, FiTrendingUp } from "react-icons/fi";
import OurServicesSection from "../components/about-components/OurServicesSection";
// eslint-disable-next-line
import abouthero from "../assets/jpeg/abouthero.jpeg";

function About() {
  const OurServices = [
    {
      title: "PROPERTY DEVELOPMENT",
      description:
        "The planning, design, and construction of residential or commercial real estate turning rawland into premium, serviced plotsand lifestyle communities with modern infrastructure.",
    },
    {
      title: "INVESTMENT ADVISOR",
      description:
        "Strategic insights to help inves-tors maximize returns offering tailored real estate investmentoptions, due diligence, and portfolio planning to ensure profitable outcomes.",
    },
    {
      title: "ADVISORY SERVICES",
      description:
        "Expert guidance across the realestate value chain helping clients assess opportunities, manage risks, and make informed property decisions aligned with their goals.",
    },
    {
      title: "PROJECT MANAGEMENT",
      description:
        "End-to-end coordination of real estate projects overseeing planning, execution, timelines, budgets, and quality to deliver successful developments efficiently and professionally.",
    },
  ];

  const values = [
    {
      icon: FiHeart,
      title: "PASSION",
      description: "Upholding dedication towards achieving our goals.",
    },
    {
      icon: FiZap,
      title: "INNOVATION",
      description: "Generating new solutions for value creation.",
    },
    {
      icon: FiAward,
      title: "EXCELLENCE",
      description: "Striving for consistent delivery of high-quality services.",
    },
    {
      icon: FiUsers,
      title: "COLLABORATION",
      description: "Ensuring cooperation within our team & partners.",
    },
    {
      icon: FiTrendingUp,
      title: "EFFICIENCY",
      description: "Maximizing productivity, minimizing waste.",
    },
  ];
  const projectSlides = [
    {
      image: "abouthero",
      title: "About Us",
      text: "",
    },
  ];

  return (
    <>
      <section>
        <HeroSlider slides={projectSlides} showButtons={false} />
      </section>
      <section className="container">
        <AboutSection />
      </section>
      <section className="content">
        <CeoSection />
      </section>
      <section className="content">
        <OurServicesSection values={OurServices} />
      </section>
      <section className="container">
        <CoreValuesSection values={values} />
      </section>
      <section className="content">
        <BoardOfDirectors />
      </section>
    </>
  );
}

export default About;
