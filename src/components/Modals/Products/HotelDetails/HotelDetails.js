import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './HotelDetails.css';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import { handleModalProduct } from '../../../../actions/ui';
import { SearchDataRooms } from './SearchDataRooms';
import { SearchRooms } from '../SearchRooms/SearchRooms';
import { ShowCreditCards } from '../../../UI/ShowCreditCards/ShowCreditCards';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const HotelDetails = ({ setShowModalMap }) => {
  const { showModalProduct } = useSelector((state) => state.ui);
  const { hotelSelected, hotelRoomsFound } = useSelector((state) => state.searchEngine);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(handleModalProduct(false));
  };

  const handleUrlImage = (url) => {
    if (url) {
      let value = url.replace('{size}', 'x500');
      return value;
    }
  };

  const handleAmenities = (data) => {
    let dataAmenities = [];

    data.forEach((element) => {
      element.amenities.forEach((e) => {
        dataAmenities.push(e);
      });
    });
    return dataAmenities;
  };

  return (
    <Modal isOpen={showModalProduct} style={customStyles} className="modal2" overlayClassName="modal-fondo" closeTimeoutMS={200}>
      <div className="modalProductDetails">
        <div className="container">
          <div className="modalProductDetails__header mb-3">
            <div className="modalProductDetails__title">
              <h4>{hotelSelected?.name}</h4>
              <span>
                {hotelSelected?.region?.country_code} - {hotelSelected?.region?.name}
              </span>
            </div>
            <button type="button" className="modalProductDetails__btnClose" onClick={handleCloseModal}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="">
                <img src={handleUrlImage(hotelSelected?.images[0])} alt="img hotel 1" className="img-fluid"></img>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="">
                    <img src={handleUrlImage(hotelSelected?.images[1])} className="img-fluid"></img>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="">
                    <img src={handleUrlImage(hotelSelected?.images[2])} className="img-fluid"></img>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="">
                    <img src={handleUrlImage(hotelSelected?.images[3])} className="img-fluid"></img>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="">
                    <img src={handleUrlImage(hotelSelected?.images[4])} className="img-fluid"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SearchDataRooms />
          {hotelRoomsFound.length > 0 && <SearchRooms />}
          <div className="row">
            <div className="col-md-6">
              {hotelSelected?.description_struct.map((e) => (
                <>
                  <h5>{e.title}</h5>
                  <div className="modalProductDetails__infoContent mb-3">
                    <p>{e.paragraphs[0]} </p>
                  </div>
                </>
              ))}
              <h5>Métodos de pago</h5>
              <div className="modalProductDetails__infoContent mb-3">
                <ul>
                  <ShowCreditCards creditCards={hotelSelected?.payment_methods} className="d-flex" />
                  {/* {hotelSelected?.payment_methods.map((e) => (
                    <li key={e}>{e}</li>
                  ))} */}
                </ul>
              </div>
              <div className="modalProductDetails__termnContent">
                <p>Para ver los términos y condiciones del oferente, descárgate el siguiente documento</p>
                <div className="modalProductDetails__termnBtn">
                  <img src="../../../static/IMAGENES/Icon/SVG/pdf-icon.svg" />
                  <p>Términos y condiciones del proveedor</p>
                </div>
              </div>
            </div>
            <div className="offset-md-1 col-md-5">
              <h5>Perfil del establecimiento</h5>
              <div className="modalProductDetails__infoContent mb-3">
                <ul>{hotelSelected && handleAmenities(hotelSelected?.amenity_groups).map((e) => <li key={e}>{e}</li>)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
