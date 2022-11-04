import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const MainVisual = () => {
  const sliderImgs = [
    "./images/mainVisual1.jpg",
    "./images/mainVisual2.jpg",
    "./images/mainVisual3.jpg",
  ];
  return (
    <>
      <section className="main-visual">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          effect={"fade"}
        >
          {sliderImgs.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-content">
                  {/* Swiper上に設置しているコンテンツ */}
                  <div className="wrapper lightSpeedInRight">
                    <h2>This Heading Section</h2>
                    <h1>
                      Lorem ipsum dolor sit,
                      <br /> amet consectetur adipisicing.
                    </h1>
                  </div>
                </div>
                <div className="swiper-bg">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default MainVisual;
