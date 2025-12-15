import React from "react";
import newsletter from "../../assets/jpeg/newsletter.jpeg";

function Newsletter() {
  return (
    <>
      <h2 className="header tin-text">
        <span className="primary">LATEST </span>
        <span className="secondary">UPDATE</span>
      </h2>

      <div className="container newsletter">
        <img src={newsletter} alt="Newsletter" />
      </div>
    </>
  );
}

export default Newsletter;
