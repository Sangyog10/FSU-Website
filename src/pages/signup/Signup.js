import React from "react";
import Layout from "../../components/Layout/Layout";
import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        console.log(res);
        toast.success(res.data.message);
        navigate("/login");
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      {/* <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Signup Here</h1>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone No"
              required
              value={phone}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              required
              value={address}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your birth place"
              onChange={(e) => setAnswer(e.target.value)}
              required
              value={answer}
            />
          </div>

          <button type="submit" className="btn  ">
            Signup
          </button>
        </form>
      </div> */}
      <section className="my-4">
        <form onSubmit={handleSubmit}>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-4">
                  <div
                    className="card"
                    style={{
                      borderRadius: "15px",
                      background: "var(--gradient-bg)",
                    }}
                  >
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center text-white mb-5">
                        Create an account
                      </h2>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Your Name"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          required
                        />
                        <label
                          className="form-label text-white my-2"
                          htmlFor="form3Example1cg"
                        >
                          Your Name
                        </label>
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          value={email}
                        />
                        <label
                          className="form-label text-white my-2"
                          htmlFor="form3Example1cg"
                        >
                          Email
                        </label>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone No"
                          required
                          value={phone}
                        />
                        <label
                          className="form-label text-white my-2"
                          htmlFor="form3Example1cg"
                        >
                          Phone Number
                        </label>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                          placeholder="Address"
                          onChange={(e) => setAddress(e.target.value)}
                          required
                          value={address}
                        />
                        <label
                          className="form-label text-white my-2"
                          htmlFor="form3Example1cg"
                        >
                          Address
                        </label>
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          value={password}
                        />
                        <label
                          className="form-label text-white my-2"
                          htmlFor="form3Example1cg"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your birth place"
                          onChange={(e) => setAnswer(e.target.value)}
                          required
                          value={answer}
                        />
                        <label
                          className="form-label text-white my-2"
                          htmlFor="form3Example1cg"
                        >
                          Enter your Birthplace
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body"
                        >
                          SignUp
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <Link to="/login" className="fw-bold text-body">
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Signup;
