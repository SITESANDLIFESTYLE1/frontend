import React from "react";
import HeroSlider from "../components/HeroSlider";
import ContactSection from "../components/contact-components/ContactSection";
import MapSection from "../components/contact-components/MapSection";
import hero1 from "../assets/png/contactHero.png";
import hero2 from "../assets/png/contactHero2.png";
import hero3 from "../assets/png/contactHero3.png";
import hero4 from "../assets/png/contactHero4.png";

function Contact() {
  const projectSlides = [
    {
      image: hero3,
      title: "Contact Us",
      text: "",
    },
    {
      image: hero2,
      title: "Contact Us",
      text: "",
    },
    {
      image: hero1,
      title: "Contact Us",
      text: "",
    },
    {
      image: hero2,
      title: "Contact Us",
      text: "",
    },
    {
      image: hero4,
      title: "Contact Us",
      text: "",
    },
  ];
  return (
    <>
      <section>
        <HeroSlider slides={projectSlides} showButtons={false} />
      </section>
      <section className="containerx">
        <ContactSection />
      </section>
      <section className="containerx">
        <MapSection />
      </section>
      <br />
      <br />
    </>
  );
}

export default Contact;
