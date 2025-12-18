import React from "react";
import ContactSection from "../components/contact-components/ContactSection";
import MapSection from "../components/contact-components/MapSection";

function Contact() {
  return (
    <>
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
