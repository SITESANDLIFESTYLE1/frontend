import React from "react";
import AffiliateSection from "../components/affiliate-components/AffiliateSection";
import HeroSlider from "../components/HeroSlider";

function Affiliate() {
  const affiliateSlides = [
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769673623/affiliateHero_fqdzhb.jpg",
      title: "Become An Affiliate",
      subtitle: "",
    },
    {
      image:
        "https://res.cloudinary.com/dy1uzkyuk/image/upload/q_auto/dpr_auto/v1769673696/affiliate_hxiowz.jpg",
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
      <br />
    </>
  );
}

export default Affiliate;
