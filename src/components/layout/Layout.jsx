import React from "react";
import Header from "./Header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
