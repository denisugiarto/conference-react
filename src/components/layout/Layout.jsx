import React from 'react';
import Navbar from '../UI/Header/Header';

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
