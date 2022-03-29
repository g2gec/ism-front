import React from 'react';
import { useSelector } from 'react-redux';
import './Banks.css';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const Banks = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={user ? 'banks__activeLoged' : 'banks'}>
      <Swiper
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sponsors__img">
            <img className="img-fluid" src="../../../static/IMAGENES/Icon/SVG/bank_guayakil.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsors__img">
            <img className="img-fluid" src="../../../static/IMAGENES/Icon/SVG/Banco-pichincha-logo.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsors__img">
            <img className="img-fluid" src="../../../static/IMAGENES/Icon/SVG/Banco-pacifico-logo.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsors__img">
            <img className="img-fluid" src="../../../static/IMAGENES/Icon/SVG/Banco-bolivariano-logo.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsors__img">
            <img className="img-fluid" src="../../../static/IMAGENES/Icon/SVG/Banco-internacional-logo.svg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sponsors__img">
            <img className="img-fluid" src="../../../static/IMAGENES/Icon/SVG/Banco-austro-logo.svg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
