import React from "react";
import Slider from "react-slick";
import styles from "./carousel.module.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carus.css";
import cn from "classnames";

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
      <Slider {...settings} className={styles.main}>
        <div className={cn(styles.img, styles.first)}>
          <div className={styles.block}>
            <h3>Заряжены и настроены на победу</h3>
            <h1>Игровые ПК на базе GEFORCE RTX 3080 Ti</h1>
            <Link to='/configurator'>
              <button>Купить ПК</button>
            </Link>
          </div>
        </div>
        <div className={cn(styles.img, styles.second)}>
          <div className={styles.block}>
            <h3>RTX ON</h3>
            <h1>Крутые ПК для CYBERPUNK 2077</h1>
            <Link to='/game'>
              <button>Купить ПК</button>
            </Link>
          </div>
        </div>
        <div className={cn(styles.img, styles.third)}>
          <div className={styles.block}>
            <h3>Оптимальная серия от 30 000 РУБ.</h3>
            <h1>Доступные игровые ПК EDELWEIS</h1>
            <Link to='/lowprice'>
              <button>Подобрать ПК</button>
            </Link>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
