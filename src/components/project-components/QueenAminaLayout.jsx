import React from "react";
// import projectLayout from "../../assets/jpeg/projectLayout.jpeg";
import projectLayout from "../../assets/jpeg/queen-amina-one.jpeg";

function QueenAminaLayout() {
  return (
    <>
      <h2 className="header tin-text">
        <span className="primary"> PROJECT</span>
        <span className="secondary"> LAYOUT</span>
      </h2>
      <div className="container project-layout">
        <img src={projectLayout} alt="Project Layout" />
      </div>
    </>
  );
}

export default QueenAminaLayout;
