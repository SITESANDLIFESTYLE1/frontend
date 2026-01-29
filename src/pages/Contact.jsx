import React from "react";
import HeroSlider from "../components/HeroSlider";
import ContactSection from "../components/contact-components/ContactSection";
import MapSection from "../components/contact-components/MapSection";

function Contact() {
  const projectSlides = [
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769673117/contactHero3_wdj4fe.png",
      title: "Contact Us",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769673047/contactHero2_tx08t5.png",
      title: "Contact Us",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769672865/contactHero_hkqmp5.png",
      title: "Contact Us",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769673047/contactHero2_tx08t5.png",
      title: "Contact Us",
      text: "",
    },
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769673253/contactHero4_thgwtw.png",
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
