import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";

import { useState, useEffect } from "react";

import Logo from "../../assets/white_fsu.png";

const Nav = (props) => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldFixNavbar = scrollPosition > 600;

      setIsNavbarFixed(shouldFixNavbar);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isNavbarFixed ? "fixed-navbar" : ""
      }`}
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img src={Logo} width={40} height={40} alt="Logo" />{" "}
          <span>Free Student Union</span>
        </Link>
        <button
          className="navbar-toggler text-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon  " />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav   mb-2 mb-lg-0   d-flex justify-content-center  align-items-center">
            <li className="nav-item mx-3">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-light" to="/committee">
                Committee
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-light" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-light" to="/contact">
                Notices
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link text-light" to="/contact">
                Insight
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
