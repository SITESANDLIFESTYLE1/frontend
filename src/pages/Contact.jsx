import React from "react";
import HeroSlider from "../components/HeroSlider";
import ContactSection from "../components/contact-components/ContactSection";
import MapSection from "../components/contact-components/MapSection";

function Contact() {
  const projectSlides = [
    {
      image: "/images/project-hero.jpg",
      title: "Contact Us",
      text: "",
    },
  ];

  return (
    <>
      <div className="pageHeader">
        <HeroSlider slides={projectSlides} showButtons={false} />
      </div>
      <section className="containerx">
        <ContactSection />
      </section>
      <section className="containerx">
        <MapSection />
      </section>
    </>
  );
}

export default Contact;
