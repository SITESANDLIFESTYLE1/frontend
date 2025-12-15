import React from "react";
import { useState, useEffect } from "react";

function MonroviaSwiper({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <>
      <div className="layout-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`layout-slide image ${
              index === current ? "active-slide" : "inactive-slide"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default MonroviaSwiper;
