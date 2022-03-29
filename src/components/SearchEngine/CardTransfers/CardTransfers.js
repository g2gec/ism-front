import React from 'react'
import { useHistory } from 'react-router-dom'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';

SwiperCore.use([Autoplay, Pagination, Navigation]);


export const CardTransfers = () => {

    const history = useHistory();

    const addCart = () => {
        history.push('/user/carrito')
    }

    return (
        <div className="cardSearchHotel">
            <div className="mb-2">
            <Swiper loop={true} slidesPerView={1} pagination={true} className="cardsSearchs__mySwiper">
                <SwiperSlide>
                    <div className="cardSearchHotel__image" style={{
                        backgroundImage: `url(../../../static/IMAGENES/Mercedes-tipo-g.jpg)`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        cursor: 'pointer'
                    }}>
                    <span>
                        Ver Detalles
                    </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardSearchHotel__image" style={{
                        backgroundImage: `url(../../../static/IMAGENES/mercedes-detalle-02.jpg)`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        cursor: 'pointer'
                    }}>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="cardSearchHotel__image" style={{
                        backgroundImage: `url(../../../static/IMAGENES/mercedes-detalle-03.jpg)`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        cursor: 'pointer'
                    }}>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className="cardSearchHotel__body">
                <h4>Hotel Sheraton</h4>
                <div className="cardSearchHotel__description">
                    <span>Ecuador Quito</span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <div className="cardSearchHotel__points">
                        <span>7.6</span>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-7">
                        <p className="cardSearchHotel__text">Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                    </div>
                    <div className="col-5">
                        <div className="cardSearchHotel__price">
                            <p>USD 156</p>
                            <button onClick={addCart}>
                                <img src="../../../static/IMAGENES/Icon/SVG/carrito-icon.svg" className="mr-2" />
                                Añadir
                            </button>
                        </div>

                    </div>
                </div>

                <div className="cardSearchHotel__info">
                    <img src="../../../static/IMAGENES/Icon/SVG/tiempo-02-icon.svg" />
                    <span>
                        3 horas
                    </span>
                </div>
            </div>
        </div>
    )
}
