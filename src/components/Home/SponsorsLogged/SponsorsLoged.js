import React from 'react'
import './SponsorsLoged.css'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

SwiperCore.use([Autoplay, Pagination, Navigation]);
export const SponsorsLoged = () => {
    return (
        <div className="sponsorsLoged">
            <Swiper slidesPerView={1} spaceBetween={10} loop={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 5,
                    "spaceBetween": 50
                }
                }} className="mySwiper">
                    <SwiperSlide>
                    <div className="sponsors__img">
                        <img className="img-fluid" src="../../../static/IMAGENES/logosBa/Avianca.png" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sponsors__img">
                        <img className="img-fluid" src="../../../static/IMAGENES/logosBa/Iberia.png" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sponsors__img">
                        <img className="img-fluid" src="../../../static/IMAGENES/logosBa/Marriott.png" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sponsors__img">
                        <img className="img-fluid" src="../../../static/IMAGENES/logosBa/Budget.png" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="sponsors__img">
                        <img className="img-fluid" src="../../../static/IMAGENES/logosBa/Sheraton.png" />
                    </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}
