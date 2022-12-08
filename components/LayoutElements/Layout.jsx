import React from "react";
import Navbar from "./Navbar";
import Nav from "./Navbar2";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Nav />
      {children}
      <Footer />
      <ToastContainer
        autoClose={2000}
        closeOnClick
        hideProgressBar
        toastStyle={{ backgroundColor: "#f0ecec", color: "black" }}
      />
    </>
  );
}

export default Layout;
