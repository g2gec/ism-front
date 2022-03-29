import React from 'react';
import { useHistory } from 'react-router-dom';
import { SearchAdvance } from '../../SearchAdvance/SearchAdvance';
import imgBanner from '../../../assets/images/Banner/banner_logged.jpg';

import './BillboardLogged.css';

export const BillboardLogged = () => {
  const history = useHistory();

  const handleSearch = () => {
    history.push('/user/busqueda');
  };

  return (
    <div
      className="billboardLogged"
      style={{
        backgroundImage: `url(${imgBanner})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="billboardLogged__shadow"></div>
      <div className="billboardLogged__content">
        <h2>El destino de tus sueños, está aquí</h2>
        <p className="mb-5">¡Comienza a diseñar tu viaje!</p>
        <SearchAdvance />
      </div>
    </div>
  );
};
