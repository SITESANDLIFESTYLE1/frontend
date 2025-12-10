import React from "react";
import newsletter from "../../assets/png/newsletter.jpeg";

function Newsletter() {
  return (
    <>
      <h2 className="header tin-text">
        <span className="welcome">LATEST </span>
        <span className="sites">UPDATE</span>
      </h2>

      <div className="flex justify-center container newsletter">
        <img
          src={newsletter}
          alt="Newsletter"
          className="!max-w-[200px] !w-[200px] !h-auto mx-auto block"
        />
      </div>
    </>
  );
}

export default Newsletter;
