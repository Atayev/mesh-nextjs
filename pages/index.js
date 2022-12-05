import Head from "next/head";
import Image from "next/image";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Test from "../components/test";
import styles from "../styles/Home.module.css";
import Nav from "../components/Navbar2";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/data.json");
//   const data = await res.json();

//   return {
//     props: {
//       slider: data.slider,
//     },
//   };
// };
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()

  return {
    props: {
      slider: data.slider,
      products:data.products
    }
  }
}

export default function Home({ slider,products }) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(products)
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <div className={styles.main}>
      <Navbar />
      <Nav />
      <Slider items={slider} />
      <Footer />

      <ToastContainer
        autoClose={2000}
        closeOnClick
        hideProgressBar
        toastStyle={{ backgroundColor: "#f0ecec", color: "black" }}
      />
    </div>
  );
}
