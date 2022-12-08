import Head from "next/head";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { initMongoose } from "../utils/dbConnect.js";

import Products from "./products";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { getAllProducts } from "./api/products";
import { getSliderData } from "./api/slider";

export const getServerSideProps = async () => {
  await initMongoose();
  const data = await getAllProducts();
  const sliderData = await getSliderData();
  return {
    props: {
      products: JSON.parse(JSON.stringify(data)),
      slider: JSON.parse(JSON.stringify(sliderData)),
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:3000/data.json");
//   const data = await res.json();

//   return {
//     props: {
//       slider: data.slider,
//       products: data.products,
//     },
//   };
// };

export default function Home({ slider, products }) {
  const [isLoading, setIsLoading] = useState(false);
  console.log(slider[0].imageUrl)

  const imageUrls = slider[0].imageUrl
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.main}>
      <Layout>
        <Slider items={slider} images={ imageUrls } />
        <Products products={products} />
      </Layout>
    </div>
  );
}
