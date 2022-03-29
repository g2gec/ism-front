import React from 'react';
import { useHistory } from 'react-router-dom';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Sponsors } from '../Sponsors/Sponsors';
import videoBanner1 from '../../../assets/images/Banner/01.mp4';
import imageBanner2 from '../../../assets/images/Banner/02.jpg';
import imageBanner3 from '../../../assets/images/Banner/03.jpg';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

// import './styles.css';
import './Billboard.css';

// install Swiper modules
SwiperCore.use([Pagination]);

export const Billboard = () => {
  const history = useHistory();

  const goViewContact = () => {
    history.push('contactoCliente');
  };
  return (
    <>
      <Swiper id="bilboardHome" pagination={true} className="mySwiper">
        <SwiperSlide className="billboard">
          <video
            autoplay="autoplay"
            muted="muted"
            preload
            loop="loop"
            src={videoBanner1}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></video>
          <div className="billboard__content">
            <div className="billboard__contentText px-5 my-5">
              <h2>Viaja</h2>
              <p>Con la membresía que te brinda beneficios en ahorros y descuentos exclusivos.</p>
              <button className="btn__gold" onClick={goViewContact}>
                Contáctanos
              </button>
            </div>
            <Sponsors />
          </div>
        </SwiperSlide>
        <SwiperSlide className="billboard">
          <div
            style={{
              backgroundImage: `url(${imageBanner2}`,
              backgroundSize: 'cover',
              //   backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="billboard__content">
              <div className="billboard__contentText px-5 my-5">
                <h2>Viaja</h2>
                <p>Con la membresía que te brinda beneficios en ahorros y descuentos exclusivos.</p>
                <button className="btn__gold" onClick={goViewContact}>
                  Contáctanos
                </button>
              </div>
              <Sponsors />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="billboard">
          <div
            style={{
              backgroundImage: `url(${imageBanner3}`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="billboard__content">
              <div className="billboard__contentText px-5 my-5">
                <h2>Viaja</h2>
                <p>Con la membresía que te brinda beneficios en ahorros y descuentos exclusivos.</p>
                <button className="btn__gold" onClick={goViewContact}>
                  Contáctanos
                </button>
              </div>
              <Sponsors />
            </div>
          </div>
        </SwiperSlide>
        {/* <Sponsors /> */}
      </Swiper>
    </>
  );
};
