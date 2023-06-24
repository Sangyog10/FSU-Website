import React from "react";
import Layout from "../../components/Layout/Layout";
import "./styles.css";
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
      <div className="form-container">
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
      </div>
    </Layout>
  );
};

export default Signup;
