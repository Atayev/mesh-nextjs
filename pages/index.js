import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Slider />
    </div>
  );
}
