import React from 'react';
import ReactTooltip from 'react-tooltip';

export const ServicesHotelCard = (data) => {
  const handleGenerateIcons = (service) => {
    if (service === 'has_internet') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-wifi mr-1" data-tip="Wifi"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'has_airport_transfer') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-plane mr-1" data-tip="Transferencia de aeropuerto"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'has_parking') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-car mr-1" data-tip="Estacionamiento"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'has_pool') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-swimming-pool mr-1" data-tip="Piscina"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'has_fitness') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-dumbbell mr-1" data-tip="GYM"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'has_spa') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-spa mr-1" data-tip="Spa"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'beach') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-umbrella-beach mr-1" data-tip="Playa"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'air_conditioning') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-wind mr-1" data-tip="Aire acondicionado"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'kitchen') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-utensils mr-1" data-tip="Cocina"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
    if (service === 'has_business') {
      return (
        <div className="cardSearchHotel__servicesImage mr-1">
          <i className="fas fa-user-tie mr-1" data-tip="Sala de negocios"></i>
          <ReactTooltip type="dark" place="bottom" effect="float" resizeHide={true} data-multiline={true} className="infoHelp__container" />
        </div>
      );
    }
  };

  return (
    <div className="cardSearchHotel__services">
      {data.data.map((e) => (
        <>{handleGenerateIcons(e)}</>
      ))}
    </div>
  );
};
