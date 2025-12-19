import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Icon } from "../assets/svg/SL1.svg";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const pathMatchRoute = (route) => route === location.pathname;

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar-logo" onClick={() => goTo("/")}>
        <Icon className="navbar-icon" />
      </div>

      {/* Desktop Nav */}
      <nav className="navbarNav desktop-nav">
        <ul className="navbarListItems">
          {[
            { label: "About Us", path: "/about" },
            { label: "Project", path: "/projects" },
            { label: "Contact Us", path: "/contact" },
            { label: "Affiliate", path: "/affiliate" },
          ].map((item) => (
            <li
              key={item.path}
              className="navbarListItem"
              onClick={() => goTo(item.path)}
            >
              <p
                className={
                  pathMatchRoute(item.path)
                    ? "navbarListItemNameActive"
                    : "navbarListItemName"
                }
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Toggle */}
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-nav">
          {[
            { label: "About Us", path: "/about" },
            { label: "Project", path: "/projects" },
            { label: "Contact Us", path: "/contact" },
            { label: "Affiliate", path: "/affiliate" },
          ].map((item) => (
            <p
              key={item.path}
              className={
                pathMatchRoute(item.path)
                  ? "mobile-nav-item active"
                  : "mobile-nav-item"
              }
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </p>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavBar;
