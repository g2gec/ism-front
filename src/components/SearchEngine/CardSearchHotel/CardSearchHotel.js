import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import './CardSearchHotel.css';
import { handleModalProduct } from '../../../actions/ui';
import { ServicesHotelCard } from './ServicesHotelCard';
import { getHotelDetails } from '../../../actions/searchEngine';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export const CardSearchHotel = ({ data }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const addCart = () => {
    history.push('/user/carrito');
  };

  const handleUrlImage = (url) => {
    let value = url.replace('{size}', 'x500');
    return value;
  };

  const handleGenerateStar = (number) => {
    let stars = [];
    let i = 0;
    while (i < number) {
      stars.push(i);
      i++;
    }
    return stars;
  };
  return (
    <div className="cardSearchHotel">
      <div className="mb-2">
        <Swiper loop={true} slidesPerView={1} pagination={true} className="cardsSearchs__mySwiper">
          {data.images.slice(0, 5).map((e, index) => (
            <SwiperSlide>
              <div
                className="cardSearchHotel__image"
                style={{
                  backgroundImage: `url(${handleUrlImage(e)})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  cursor: 'pointer',
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cardSearchHotel__body">
        <h4>{data.name}</h4>
        <div className="cardSearchHotel__description">
          <span>
            {data?.region?.country_code} {data?.region?.name}
          </span>
          {handleGenerateStar(data.star_rating).map((e) => (
            <i class="fas fa-star"></i>
          ))}
        </div>
        {data.serp_filters && <ServicesHotelCard data={data.serp_filters} />}

        <div className="cardSearchHotel__price mt-3">
          <button onClick={() => dispatch(getHotelDetails(data.id))}>Ver detalles</button>
          {/* <button onClick={() => dispatch(getHotelDetails('test_hotel'))}>Ver detalles</button> */}
        </div>
      </div>
    </div>
  );
};
