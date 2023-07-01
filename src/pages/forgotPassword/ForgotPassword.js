import React from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

const ForgotPassword = () => {
  const [newPassword, setnewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, newPassword, answer }
      );
      if (res && res.data.success) {
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
    <Layout>
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
                  <h2 className="fw-bold mb-2 text-uppercase">Set Password</h2>

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    id="formControlLg"
                    type="email"
                    size="60px"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email}
                  />

                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    id="formControlLg"
                    type="text"
                    size="60px"
                    placeholder="Enter your birth place"
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                    value={answer}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    labelClass="text-white"
                    id="formControlLg"
                    type="password"
                    size="60px"
                    placeholder="New 
                    Password"
                    onChange={(e) => setnewPassword(e.target.value)}
                    required
                    value={newPassword}
                  />
                  <button type="submit" className="btn btn-primary">
                    Change Password
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </Layout>
  );
};

export default ForgotPassword;
