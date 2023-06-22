import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
