import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ClientFeedback() {
  const testimonials = [
    {
      name: "MIKEL SANI RAMON",
      objective: "Property Management Trust",
      text: `Warren Buffet says that when he hires people, he looks for three things:
      "We look for intelligence, energy, and integrity..."
      
      I have never regretted having Sites and Lifestyle manage my property.`,
    },
    {
      name: "AISHA BELLO",
      objective: "Customer Experience",
      text: `From the first consultation to property handover, the experience was seamless.
      Their attention to detail and professionalism stood out.`,
    },
    {
      name: "IBRAHIM LAWAL",
      objective: "Investment Confidence",
      text: `Sites and Lifestyle helped me make confident real estate decisions.
      Transparency and communication were excellent throughout.`,
    },
    {
      name: "ZAINAB YUSUF",
      objective: "Long-term Value",
      text: `What impressed me most was their long-term thinking.
      They focus on value, not just quick wins.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const total = testimonials.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="client-feedback-wrapper">
      <div className="client-feedback-container">
        <h2 className=" corevalue-header">
          <span className="primary">OUR HAPPY CLIENTS </span>
          <span className="secondary">TESTIMONIALS</span>
        </h2>

        <div className="client-feedback-content">
          <button
            className="feedback-arrow left"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={18} />
          </button>

          <div className="feedback-card">
            <h3 className="feedback-name">{current.name}</h3>
            <p className="feedback-objective">{current.objective}</p>

            <p className="feedback-text">"{current.text}"</p>
          </div>

          <button
            className="feedback-arrow right"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
