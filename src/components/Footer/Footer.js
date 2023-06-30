import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row justify-content-between">
          <div className=" col-lg-4 col-sm-6 col-md-6">
            <h6>Message from the Chief</h6>
            <p className="text-justify my-3">
              {" "}
              I fully support the formation of a free student union on campus.
              It provides a platform for your voices to be heard, addresses your
              concerns, and promotes an inclusive environment. I commit to
              supporting the union by providing necessary resources and
              maintaining open communication. Let's work together to make a
              positive impact on our campus community.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <h6>Message from the President</h6>
            <p className="text-justify my-3">
              I am honored to be your President of the Free Student Union.
              Together, we will strive to create an inclusive and engaging
              university experience. Your voice matters, and I am here to
              listen, advocate, and make positive changes. Let's work together
              to foster a supportive community and seize opportunities for
              growth. Thank you for your trust and support.
            </p>
          </div>

          <div className="col-xs-6 col-md-3 ">
            <h6>Quick Links</h6>
            <ul className="footer-links my-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/committee">Committee</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/notices">Notices</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12 ">
            <ul className="social-icons d-flex justify-content-around">
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </Link>

              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
