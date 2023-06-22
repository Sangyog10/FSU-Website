import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import Logo from "../../assets/white_fsu.png"
const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
         <img src={Logo} width={40} height={40} alt="Logo" /> <span>Free Student Union</span>
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
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav   mb-2 mb-lg-0   d-flex justify-content-center  align-items-center">
            <li className="nav-item">
              <NavLink
                className="nav-link active text-light"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/committee">
                Committee
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
