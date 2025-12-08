import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <>
      <header className="navbar">
        <nav className="navbarNav">
          <ul className="navbarListItems">
            <li
              className="navbarListItem"
              onClick={() => {
                navigate("/about");
              }}
            >
              <p
                className={
                  pathMatchRoute("/about")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                About Us
              </p>
            </li>{" "}
            <li
              className="navbarListItem"
              onClick={() => {
                navigate("/projects");
              }}
            >
              <p
                className={
                  pathMatchRoute("/projects")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Project
              </p>
            </li>{" "}
            <li
              className="navbarListItem"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <p
                className={
                  pathMatchRoute("/contact")
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                Contact Ua
              </p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
