import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { useAuth } from "../../context/Auth.js";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        toast.success(res.data.message);
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
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
          <h1>Login</h1>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              value={password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="mb-3">
            <Link type="button" to="/forgotPassword" className="text-white">
              Forgot Password?
            </Link>
          </div>
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
                    <div className="card-body p-5 ">
                      <h3 className="text-uppercase text-center text-white mb-5">
                        Login
                      </h3>

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
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          value={password}
                        />
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block btn-lg gradient-custom-4 text-white"
                        >
                          Login
                        </button>
                      </div>

                      <Link
                        to="/login"
                        className="fw-bold text-white text-center"
                      >
                        Forgot Password?
                      </Link>
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

export default Login;
