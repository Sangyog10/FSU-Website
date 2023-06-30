import React from "react";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
