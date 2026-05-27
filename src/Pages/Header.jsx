import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../Styles/Header.css";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/owrwork" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-4 text-center">

            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active-link"
                      : "nav-link nav-custom-link"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;