import React, { useState, useEffect } from "react";

function MonroviaSwiper({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="layout-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`layout-slide image ${
            index === current ? "active-slide" : ""
          }`}
        >
          <div
            className="layout-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </div>
      ))}
    </div>
  );
}

export default MonroviaSwiper;
