import React from "react";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import "./styles.css";

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
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Signup-FSU"}>
      <MDBContainer fluid>
        <form onSubmit={handleSubmit}>
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol col="12">
              <MDBCard
                className=" text-white my-5 mx-auto"
                style={{
                  borderRadius: "1rem",
                  maxWidth: "400px",
                  background: "var(--gradient-bg)",
                }}
              >
                <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                  <h2 className=" mb-2 text-uppercase">Sign UP</h2>
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    type="text"
                    size="60px"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                    value={name}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    type="text"
                    size="60px"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    type="text"
                    size="60px"
                    placeholder="Your Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    value={phone}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    type="text"
                    size="60px"
                    placeholder="Your Address"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    value={address}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    type="password"
                    size="60px"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    value={password}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    type="text"
                    size="60px"
                    placeholder="Your Birth Place"
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                    value={answer}
                  />

                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>

                  <div className="my-4">
                    <p className="text-center text-white  mb-0">
                      Have already an account?{" "}
                      <Link to="/login" className="fw-bold text-white">
                        Login
                      </Link>
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </Layout>
  );
};

export default Signup;
