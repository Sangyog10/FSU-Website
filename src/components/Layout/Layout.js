import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer />
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
