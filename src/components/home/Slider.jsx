import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// images
import slide1 from './slide-images/slide-1.jpg';
import slide2 from './slide-images/slide-2.jpg';
import slide3 from './slide-images/slide-3.jpg';
import slide4 from './slide-images/slide-4.jpg';

const Slider = () => {
  return (
    <div className="slider">
      <div className="container pt-4 pb-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide flex">
              <figure>
                <img src={slide1} alt="Slide images" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide flex">
              <figure>
                <img src={slide2} alt="Slide images" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide flex">
              <figure>
                <img src={slide3} alt="Slide images" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide flex">
              <figure>
                <img src={slide4} alt="Slide images" />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider
