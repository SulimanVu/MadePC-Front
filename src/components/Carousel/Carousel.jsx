import React from "react";
import Slider from "react-slick";
import styles from "./carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className={styles.img}>
          <img src="http://placekitten.com/g/400/200" />
        </div>
        <div className={styles.img}>
          <img src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
