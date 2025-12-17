import React from "react";
import HeroSlider from "../components/HeroSlider";
import AffiliateSection from "../components/AffiliateSection";

function Affiliate() {
  const projectSlides = [
    {
      image: "/images/project-hero.jpg",
      title: "Become An Affiliate",
      text: "",
    },
  ];

  return (
    <>
      <div className="pageHeader">
        <HeroSlider slides={projectSlides} showButtons={false} />
      </div>
      <section className="containerx">
        <AffiliateSection />
      </section>
    </>
  );
}

export default Affiliate;
