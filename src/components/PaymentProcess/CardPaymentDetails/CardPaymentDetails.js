import React from 'react';
import { useSelector } from 'react-redux';

import './CardPaymentDetails.css';

export const CardPaymentDetails = () => {
  const { hotelSelected, roomSelected } = useSelector((state) => state.searchEngine);

  return (
    <div className="cardPaymentDetails mb-3">
      <h5 className="mb-0">{hotelSelected?.name}</h5>
      <div className="cardPaymentDetails__item">
        <p className="mb-0">{roomSelected?.room_name}</p>
        {/* <span>USD {totalCar}</span> */}
      </div>
      <div className="cardPaymentDetails__line"></div>
      <div className="cardPaymentDetails__total">
        <p className="mb-0">TOTAL</p>
        <span>
          {roomSelected?.payment_options.payment_types[0].currency_code} {roomSelected?.payment_options.payment_types[0].amount}
        </span>
      </div>
    </div>
  );
};
