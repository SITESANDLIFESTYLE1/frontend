import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ClientFeedback() {
  return (
    <section className="client-feedback-wrapper">
      <div className="client-feedback-container">
        <h2 className="client-feedback-title header">
          <span className="primary">OUR HAPPY CLIENTS </span>
          <span className="secondary">TESTIMONIALS</span>
        </h2>

        <div className="client-feedback-content">
          <button className="feedback-arrow left">
            <FaChevronLeft size={18} />
          </button>

          <div className="feedback-card">
            <h3 className="feedback-name">MIKEL SANI RAMON</h3>

            <p className="feedback-text">
              "Warren Buffet says that when he hires people, he looks for three
              things: 'We look for intelligence, energy, and integrity. And if
              they don't have the last one, the first two will kill you.'
              <br /> <br />I have never regretted having Sites and Lifestyle
              manage my property."
            </p>
          </div>

          <button className="feedback-arrow right">
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
