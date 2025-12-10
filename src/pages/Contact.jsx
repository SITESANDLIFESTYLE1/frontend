import React from "react";
import HeroSlider from "../components/HeroSlider";

function Contact() {
  const projectSlides = [
    {
      image: "/images/project-hero.jpg",
      title: "Contact Us",
      text: "",
    },
  ];

  return (
    <div className="pageHeader">
      <HeroSlider slides={projectSlides} showButtons={false} />
    </div>
  );
}

export default Contact;
