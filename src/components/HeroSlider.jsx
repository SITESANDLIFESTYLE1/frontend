import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HeroSlider({ slides = [], showButtons = false }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === current ? "active-slide" : "inactive-slide"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {index === current && (
            <div className="hero-overlay">
              <h1 className="hero-title">{slide.title}</h1>
              {slide.subtitle && (
                <p className="hero-subtitle">{slide.subtitle}</p>
              )}

              {showButtons && (
                <div className="hero-buttons">
                  <button
                    className="hero-btn primary"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  >
                    Schedule a Tour
                  </button>
                  <button
                    className="hero-btn secondary"
                    onClick={() => {
                      navigate("/affiliate");
                    }}
                  >
                    Become An Affiliate
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HeroSlider;
