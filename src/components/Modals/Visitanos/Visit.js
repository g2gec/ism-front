import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalVisit } from '../../../actions/ui';

export const Visit = () => {
  const dispatch = useDispatch();
  const { showModalVisit } = useSelector((state) => state.ui);
  return (
    <Modal
      show={showModalVisit}
      // show={true}
      onHide={() => dispatch(handleModalVisit(false))}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="modal__btnClose d-flex justify-content-end">
          <i className="fas fa-times" onClick={() => dispatch(handleModalVisit(false))}></i>
        </div>
        <div className="contact__form">
          <h3 className="text-center">Visitanos fisicamente</h3>
          <div className="videoCallModal__info mt-4">
            <p>
              <strong>Dirección: </strong>De los Motilones, Entre Bermejo y Charapa. Edificio Diamond 4. Quito, Ecuador
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15897.317178470077!2d-75.46942804999999!3d5.050259799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1638316800484!5m2!1sen!2sco"
              style={{
                width: '100%',
                height: '200px',
                border: 'none',
              }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
