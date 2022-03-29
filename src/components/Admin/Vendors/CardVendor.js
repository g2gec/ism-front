import React from 'react';

export const CardVendor = ({ data, handleSelected }) => {
  return (
    <div className="membershipCard mb-3">
      <div className="membershipCard__details">
        <div className="membershipCard__img">
          {parseInt(data.type_seller) === 1 ? (
            <div className="d-flex flex-column align-items-center">
              <i class="fas fa-male"></i>
              <span>Interno</span>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <i class="fas fa-street-view"></i>
              <span>Externo</span>
            </div>
          )}
        </div>
        <div className="flex-column">
          <h4>
            {data.name} {data.surname}
          </h4>
          <span onClick={() => handleSelected(data)}>Ver detalle</span>
        </div>
      </div>
      <div className="membershipCard__check">
        <img src="../../../static/IMAGENES/Icon/SVG/check-icon.svg" />
      </div>
    </div>
  );
};
