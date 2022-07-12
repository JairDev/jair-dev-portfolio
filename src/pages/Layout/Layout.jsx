import React from "react";
import Header from "components/Header/Header"
import Footer from "components/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header/>
      <div id="container">{children}</div>
      <Footer/>
    </>
  );
}

export default Layout;
