import React from "react";
import Layout from "../../components/Layout/Layout";
import "./contact.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout title={"Contact-FSU"}>
      <div className="col-lg-12 col-sm-10 my-4 div_map">
        {
          <iframe
            title="myfooterunique"
            className="img-fluid map col-lg-12"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14245.917467843463!2d87.2923586!3d26.792861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b606ce89f9%3A0x7423e72f8e139e05!2sPurwanchal%20Engineering%20Campus(ERC)!5e0!3m2!1sen!2snp!4v1687102715794!5m2!1sen!2snp"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        }
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-7">
            <h4>Send Message</h4>
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your valid email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
          <div className="col-md-5">
            <h4 className="text-center">Contact us</h4>
            <hr />
            <div className="mt-5">
              <div className="d-flex">
                <MdLocationOn className="icon" />
                <p>Tinkune,Dharan</p>
              </div>
              <hr />
              <div className="d-flex">
                <FaPhoneAlt className="icon" />
                <p>9811092556</p>
              </div>
              <hr />
              <div className="d-flex">
                <MdEmail className="icon" />
                <p>fsu.erc@ioepc.edu.np</p>
              </div>
              <hr />
              <div className="d-flex">
                <FaFacebookMessenger className="icon" />
                <Link
                  to="https://www.facebook.com/messages/t/106852385712313"
                  className="text-white "
                >
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
