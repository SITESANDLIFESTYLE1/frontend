import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Icon } from "../assets/svg/SL1.svg";

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
        <p
          className="navbarListItem"
          onClick={() => {
            navigate("/");
          }}
        >
          <Icon className="navbar-icon" />
        </p>
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
                Contact Us
              </p>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
