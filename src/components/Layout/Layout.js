import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
