import React from "react";
import Layout from "../../components/Layout/Layout";
import "./committee.css";
const Committee = () => {
  return (
    <Layout title={"Committee-FSU"}>
      <div className="py-5 text-center text-info background-info" style={{}}>
        <div className="container">
          <div className="row">
            <div className="mx-auto col-md-12">
              <h1 className="mb-3" contentEditable="true">
                Meet our team
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 p-4">
              {" "}
              <img
                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                alt="Card image cap"
                width={200}
                src="/images/members/nabin.jpg"
              />
              <h4>
                {" "}
                <b>John kandy</b>{" "}
              </h4>
              <p className="mb-0">CEO and founder</p>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              {" "}
              <img
                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                src="https://i.imgur.com/8RKXAIV.jpg"
                alt="Card image cap"
                width={200}
              />
              <h4>
                {" "}
                <b>Sam ilana</b>{" "}
              </h4>
              <p className="mb-0">Co-founder</p>
            </div>
            <div className="col-lg-4 p-4">
              {" "}
              <img
                className="img-fluid d-block mb-3 mx-auto rounded-circle"
                src="https://i.imgur.com/J6l19aF.jpg"
                width={200}
              />
              <h4>
                {" "}
                <b>Maria Samantha</b>{" "}
              </h4>
              <p className="mb-0">HR Manager</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Committee;
