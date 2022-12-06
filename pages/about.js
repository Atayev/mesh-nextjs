import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/About.module.css";
function About() {
  return (
    <Layout>
      <Container maxwidth="sm">
        <Box className={styles.main}>
          <Typography variant="p">
            <span className={styles.bold}>MESHQUE</span> is the first of its
            kind <span className={styles.bold}>“Made in Azerbaijan”</span> gym
            apparel start up sourced and produced locally, using high quality
            premium textile.
            <br /> <br />
            Being a pioneer, we build a culture for better and healthier
            Azerbaijan by ushering in an era of stylish sportswear; sportswear
            that lets you define who you are and not the other way around.{" "}
            <br /> <br />
            Our online shop will guide and inspire you as we believe that sport
            is a lifestyle and, most importantly, sport is for everyone. <br />{" "}
            <br />
            MESHQUE stands for presence, consciousness and health. Take
            advantage of our educational online fitness platform where you can
            take special classes from famous Azerbaijani sportsmen and train
            from the comfort of your home. <br /> <br />
            Be bold, MESHQUE it up.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}

export default About;
