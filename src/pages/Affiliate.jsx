import React from "react";
import AffiliateSection from "../components/AffiliateSection";
import HeroSlider from "../components/HeroSlider";
import hero1 from "../assets/jpg/affiliate.jpg";
import hero2 from "../assets/jpg/affiliateHero.jpg";

function Affiliate() {
  const affiliateSlides = [
    {
      image: hero2,
      title: "Become An Affiliate",
      subtitle: "",
    },
    {
      image: hero1,
      title: "Become An Affiliate",
      subtitle: "",
    },
  ];
  return (
    <>
      <div>
        <HeroSlider slides={affiliateSlides} showButtons={false} />
      </div>
      <section className="containerx">
        <AffiliateSection />
      </section>
    </>
  );
}

export default Affiliate;
