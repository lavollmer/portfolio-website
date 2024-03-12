import React from "react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

new Swiper("#myCarousel", {
  // Additional options and configurations
});

const Carousel = () => {
  return (
    <div className="swiper-container" id="myCarousel">
      <div className="swiper-wrapper">
        <div className="swiper-slide bg-gray-200">Project 1</div>
        <div className="swiper-slide">Project 2</div>
        <div className="swiper-slide">Project 3</div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default Carousel;
