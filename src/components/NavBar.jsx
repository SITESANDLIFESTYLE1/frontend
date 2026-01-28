import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as IconDark } from "../assets/svg/SL1.svg";
import { ReactComponent as IconLight } from "../assets/svg/SL2.svg";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathMatchRoute = (route) => route === location.pathname;

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="navbar-logo" onClick={() => goTo("/")}>
        {scrolled ? (
          <IconDark className="navbar-icon" />
        ) : (
          <IconLight className="navbar-icon" />
        )}
      </div>

      <nav className="navbarNav desktop-nav">
        <ul className="navbarListItems">
          {[
            { label: "About Us", path: "/about" },
            { label: "Projects", path: "/projects" },
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

      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Projects", path: "/projects" },
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
