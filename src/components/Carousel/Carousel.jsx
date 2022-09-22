import React from "react";

import styles from "./Carousel.module.scss";
import "./Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

import { carouselItems } from "../../assets/carousel";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <Swiper
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className={styles.swiper}
      >
        {carouselItems.map((obj) => (
          <SwiperSlide key={obj.id} className={styles.slide}>
            <img src={obj.img} alt="nft" />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Carousel;
