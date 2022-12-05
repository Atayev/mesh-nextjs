import React from "react";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YoutubeIcon from "@mui/icons-material/Youtube";
import styles from "../styles/Footer.module.css";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_container}>
        <article className={styles.left}>
          <img
            className={styles.meshque_logo}
            src="https://cdn.cubics.tech/meshque_logo.png"
            alt=""
          />

          <nav>
            <Box className={styles.footer_navbar}>
              <ul className={styles.categories}>
                <li className={styles.categories_item}>
                  Contacts and Addresses
                </li>
                <li className={styles.categories_item}>About Company</li>
                <li className={styles.categories_item}>Shipping and Payment</li>
                <li className={styles.categories_item}>Return Policy </li>
                <li className={styles.categories_item}>Privacy Policy</li>
              </ul>
            </Box>
          </nav>
        </article>

        <div className={styles.icons}>
          <Link className={styles.icon} href="https://www.facebook.com/">
            <FacebookIcon />
          </Link>
          <Link className={styles.icon} href="https://www.instagram.com/">
            <InstagramIcon />
          </Link>
          <Link className={styles.icon} href="https://www.whatsapp.com/">
            <WhatsAppIcon />
          </Link>
          <Link className={styles.icon} href="https://www.youtube.com/">
            <YoutubeIcon />
          </Link>
        </div>
      </div>

      <div className={styles.author}>
        <p>Meshque.com &copy; All rights reserved </p>
        <div className={styles.author_left}>
          <p>Powered by</p>
          <img
            className={styles.cubics}
            src="https://www.meshque.com/img/cubics-brands-white.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Footer;
