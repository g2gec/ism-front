import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ip from 'ip';
import { v4 as uuidv4 } from 'uuid';

import { createNewReserveRatehawk, handleSetRoomSelected } from '../../../../actions/searchEngine';
import { handleModalProduct } from '../../../../actions/ui';

export const ItemSearchRooms = ({ data }) => {
  const history = useHistory();
  console.log('ip', ip.address());

  const dispatch = useDispatch();

  const handleCreateReserve = (book_hash) => {
    const request = {
      endpoint: '/hotel/order/booking/form/',
      data: {
        partner_order_id: uuidv4(),
        book_hash: book_hash,
        language: 'es',
        user_ip: ip.address(),
      },
    };
    dispatch(createNewReserveRatehawk(request)).then((e) => {
      dispatch(handleSetRoomSelected(data));
      dispatch(handleModalProduct(false));
      history.push('/user/pago');
    });
    // console.log('request create new reserve', request);
  };

  return (
    <>
      <p className="modalProduct__infoRoomTitle">{data?.room_name}</p>
      <div className="row mb-3">
        <div className="col-md-2">
          <div className="modalProductDetails__infoRoom text-center">
            {/* <span>AD</span> */}
            <select required>
              <option value="">Selecciona una opción</option>
              {/* {boardName.map((board) => (
                    <option value={board}>{board}</option>
                  ))} */}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <div className="modalProductDetails__infoRoom">
            <span>Cancelación sin coste hasta el {data?.payment_options?.payment_types[0].cancellation_penalties.free_cancellation_before}</span>
          </div>
        </div>
        <div className="col-md-2">
          <div className="modalProductDetails__infoRoom">
            <span>Disponibles ({data?.allotment})</span>
          </div>
        </div>
        <div className="col-md-2">
          <div className="modalProductDetails__infoRoom">
            <span>
              {data?.payment_options?.payment_types[0].amount} {data?.payment_options?.payment_types[0].currency_code}
            </span>
          </div>
        </div>
        <div className="col-md-2">
          <button type="submit" className="modalProductDetails__btnPay w-100" onClick={() => handleCreateReserve(data.book_hash)}>
            <img src="../../../static/IMAGENES/Icon/SVG/carrito-icon.svg" alt="reservar" />
            Reservar
          </button>
        </div>
      </div>
    </>
  );
};
