import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <div className="notfound-content">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Sorry, the page you’re looking for doesn’t exist.
        </p>

        <button className="notfound-btn" onClick={() => navigate(-1)}>
          Go back to previous page
        </button>
      </div>
    </section>
  );
}

export default NotFound;
