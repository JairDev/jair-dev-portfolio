import React from "react";
import Header from "components/Header/Header"
function Layout({ children }) {
  return (
    <>
      <Header/>
      <div id="container">{children}</div>
    </>
  );
}

export default Layout;
