import Head from "next/head";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Products from "./products";
import Layout from "../components/Layout";
import Loader from "../components/Loader";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();

  return {
    props: {
      slider: data.slider,
      products: data.products,
    },
  };
};

export default function Home({ slider, products }) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(products);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.main}>
      <Layout>
        <Slider items={slider} />
        <Products products={products} />
      </Layout>
    </div>
  );
}
