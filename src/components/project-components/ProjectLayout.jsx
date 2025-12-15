import React from "react";
import projectLayout from "../../assets/jpeg/projectLayout.jpeg";

function ProjectLayout() {
  return (
    <>
      <h2 className="header tin-text secondary">PROJECT LAYOUT</h2>

      <div className="container project-layout">
        <img src={projectLayout} alt="Project Layout" />
      </div>
    </>
  );
}

export default ProjectLayout;
