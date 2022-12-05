import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { Paper } from "@mui/material";

function Slider({ items }) {
  return (
<<<<<<< HEAD
      <Carousel
          autoPlay
          swipe
          cycleNavigation
          animation='slide'
          activeIndicatorIconButtonProps={{
              style: {
                  color: '#d8127d'
              }
          }
        }
        indicatorContainerProps = {{
            style: {
                zIndex:1,
                marginTop: '-20px',
                position: 'relative',
                opacity:0.9
          }
        }}
      >
          {items.map(item => (
              <Paper key={item.title} >
                  <img  src={item.imageUrl} key={item.title} className="carouselItemImage"  alt='slider' />
              </Paper>
          ))}
=======
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
      {items.map((item) => (
        <Paper key={item.title}>
          <Image
            src={item.imageUrl}
            key={item.title}
            width={1394}
            height={450}
            quality={100}
            alt="slider"
          />
        </Paper>
      ))}
>>>>>>> 844c9ebee1e744314f370e2a33682ed6c5418c94
    </Carousel>
  );
}

export default Slider;
