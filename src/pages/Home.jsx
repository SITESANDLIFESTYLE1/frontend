import React from "react";
import HeroSlider from "../components/HeroSlider";
import AmenitySection from "../components/home-components/AmenitySection";
import FeaturedProperties from "../components/home-components/FeaturedProperties";
// eslint-disable-next-line
import Newsletter from "../components/home-components/Newsletter";
import ClientFeedback from "../components/home-components/ClientFeedback";
import hero1 from "../assets/png/creek.png";
import hero2 from "../assets/png/SHORE.png";
import hero3 from "../assets/png/spring.png";
import hero4 from "../assets/png/Tide.png";
import { FiWifi, FiSun, FiUsers, FiVideo } from "react-icons/fi";
import {
  FaSwimmingPool,
  FaChild,
  FaTree,
  FaWater,
  FaRoad,
  FaBuilding,
  FaPlug,
} from "react-icons/fa";
import creek from "../assets/pdf/creek.pdf";
import shore from "../assets/pdf/shore.pdf";
import Spring from "../assets/pdf/Spring.pdf";
import Tide from "../assets/pdf/Tide.pdf";

function Home() {
  const properties = [
    {
      image: hero1,
      title: "Creek – 190 SQM",
      subtitle: "3 Bedroom Townhouse",
      link: creek,
    },
    {
      image: hero2,
      title: "Shore - 500SQM",
      subtitle: "5 Bedroom Villa +2 Rooms Chalet +Maid’s room",
      link: shore,
    },
    {
      image: hero3,
      title: "Spring – 250 SQM",
      subtitle: "4 Bedroom Twin Villa",
      link: Spring,
    },
    {
      image: hero4,
      title: "TIDE – 400 SQM",
      subtitle: "4 Bedroom Villa +Maid’s room",
      link: Tide,
    },
  ];
  const amenities = [
    {
      icon: FiWifi,
      title: "FIBER OPTICS",
    },
    {
      icon: FaSwimmingPool,
      title: "SWIMMING POOL",
    },
    {
      icon: FaChild,
      title: "CHILDREN PLAYGROUND",
    },
    {
      icon: FiSun,
      title: "SOLAR STRRETLIGHT",
    },
    {
      icon: FaTree,
      title: "ORCHARDS",
    },
    {
      icon: FaWater,
      title: "SEWAGE SYSTEM",
    },
    {
      icon: FiVideo,
      title: "CCTV",
    },
    {
      icon: FaWater,
      title: "WATER RETICULATION",
    },
    {
      icon: FiUsers,
      title: "NEGBOURHOOD CENTER",
    },
    {
      icon: FaBuilding,
      title: "CLUBHOUSE",
    },
    {
      icon: FaRoad,
      title: "VEHICULAR AND PEDESTRIAN PATHWAYS",
    },
    {
      icon: FaPlug,
      title: "POWER DISTRIBUTION",
    },
  ];
  const homeSlides = [
    {
      image: hero1,
      title: "Sustainable Lifestyle",
      subtitle: "Premium Residential & Commercial Serviced Plots",
    },
    {
      image: hero2,
      title: "Sustainable Lifestyle",
      subtitle: "Premium Residential & Commercial Serviced Plots",
    },
    {
      image: hero3,
      title: "Sustainable Lifestyle",
      subtitle: "Premium Residential & Commercial Serviced Plots",
    },
    {
      image: hero4,
      title: "Sustainable Lifestyle",
      subtitle: "Premium Residential & Commercial Serviced Plots",
    },
  ];

  return (
    <>
      <section>
        <HeroSlider slides={homeSlides} showButtons={true} />
      </section>
      <section className="container ">
        <div className="layout">
          <div className="text containerx">
            <h2 className="header primary header-section">
              <span className="primary">WELCOME TO </span>
              <span className="secondary">SITES & LIFESTYLE</span>
            </h2>
            <p className="overview-text">
              Sites & Lifestyle Limited was established by the visionary
              founders of the Bilaad Group with a clear purpose: to make home
              ownership seamless, accessible, and aspirational. We specialize in
              the development of serviced plots within well-gated, serene, and
              family-friendly communities, thoughtfully designed to redefine
              modern living.
              <br />
              Beyond residential developments, we also create vibrant commercial
              hubs and luxury hospitality experiences. Each project is carefully
              crafted to blend contemporary amenities with lifestyle-driven
              design—because we believe every space should inspire the life you
              deserve.
            </p>
          </div>
          {/* <div className="layout-image container">Youtube Video Section</div> */}
        </div>
      </section>
      <section className="content">
        <h2 className="corevalue-header tin-text">
          <span className="primary">WHY OWNERS CHOOSE </span>
          <span className="secondary">SITES & LIFESTYLE</span>
        </h2>
        <p>
          We provide innovative property solutions through trusted partnerships
          and exceptional service, some of the service include.
        </p>
        <AmenitySection amenities={amenities} />
      </section>
      <section className="containerx">
        <h2 className="header tin-text">
          <span className="primary">FEATURED</span>
          <span className="secondary">PROPERTIES</span>
        </h2>
        <FeaturedProperties properties={properties} />
      </section>
      {/* <section className="containerx">
        <Newsletter />
      </section> */}
      <section className="containerx">
        <ClientFeedback />
      </section>
    </>
  );
}

export default Home;
