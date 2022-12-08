import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Paper } from "@mui/material";

function Slider({ items,images }) {
  return (
    <Carousel
      autoPlay
      swipe
      cycleNavigation
      animation="slide"
      activeIndicatorIconButtonProps={{
        style: {
          color: "#d8127d",
        },
      }}
      indicatorContainerProps={{
        style: {
          zIndex: 1,
          marginTop: "-20px",
          position: "relative",
          opacity: 0.9,
        },
      }}
    >
        {images.map((image => (
          <Paper key={items[0].title}>
          <img
           src={image}
           key={image}
           className="carouselItemImage"
           alt="slider"
         />
        </Paper>
        )))}
         
    </Carousel>
  );
}

export default Slider;
