import React from "react";
import HeroSlider from "../components/HeroSlider";
import AmenitySection from "../components/home-components/AmenitySection";
import FeaturedProperties from "../components/home-components/FeaturedProperties";
import OurServicesSection from "../components/about-components/OurServicesSection";
import Overview from "../components/home-components/Overview";
// eslint-disable-next-line
import Newsletter from "../components/home-components/Newsletter";
import ClientFeedback from "../components/home-components/ClientFeedback";
import hero1 from "../assets/png/creek.png";
import hero2 from "../assets/png/SHORE.png";
import hero3 from "../assets/png/spring.png";
import hero4 from "../assets/png/Tide.png";
import { FiWifi, FiSun, FiUsers, FiVideo, FiDroplet } from "react-icons/fi";
import {
  FaSwimmingPool,
  FaChild,
  FaTree,
  FaRecycle,
  // eslint-disable-next-line
  FaIndustry,
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
      title: "Shore – 500SQM",
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
      icon: FiDroplet,
      title: "WATER RETICULATION",
    },
    {
      icon: FaPlug,
      title: "POWER DISTRIBUTION",
    },
    {
      icon: FaRecycle,
      // icon: FaIndustry,
      title: "SEWAGE SYSTEM",
    },
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
      icon: FiVideo,
      title: "CCTV",
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
  ];
  const homeSlides = [
    {
      image: hero1,
      title: "Sustainable Lifestyle",
      subtitle:
        "We deliver premium serviced plots and innovative commercial developments.",
    },
    {
      image: hero2,
      title: "Sustainable Lifestyle",
      subtitle:
        "We deliver premium serviced plots and innovative commercial developments.",
    },
    {
      image: hero3,
      title: "Sustainable Lifestyle",
      subtitle:
        "We deliver premium serviced plots and innovative commercial developments.",
    },
    {
      image: hero4,
      title: "Sustainable Lifestyle",
      subtitle:
        "We deliver premium serviced plots and innovative commercial developments.",
    },
  ];
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
  return (
    <>
      <section>
        <HeroSlider slides={homeSlides} showButtons={true} />
      </section>
      <section className=" container secondary-bg">
        <Overview />
      </section>
      <section className="content">
        <OurServicesSection values={OurServices} />
      </section>
      <br />
      <br />
      <section className="containerx">
        <h2 className="header tin-text">
          <span className="primary">FEATURED</span>
          <span className="secondary">PROPERTIES</span>
        </h2>
        <FeaturedProperties properties={properties} />
      </section>
      <br />
      <br />
      <section className="content ">
        <AmenitySection amenities={amenities} />
      </section>
      <br />
      <br />
      <section className="secondary-bg">
        <ClientFeedback />
      </section>
      {/* <section className="containerx">
        <Newsletter />
      </section> */}
    </>
  );
}

export default Home;
