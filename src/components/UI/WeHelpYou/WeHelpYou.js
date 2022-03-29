import React from 'react';
import iconAssitence from '../../../assets/images2/asistencia-icon.svg';
import './WeHelpYou.css';

export const WeHelpYou = () => {
  return (
    <div className="helpYou">
      <div className="helpYou__textTop mb-2">
        <span>Vendedor comercial</span>
      </div>
      <div className="d-flex">
        <div className="helpYou__img">
          <img src={iconAssitence} className="img-fluid" alt="Asistencia" />
        </div>
        <div className="helpYou__content">
          <div className="w-75">
            <div className="helpYou__title">
              <h4 className="px-3">TE AYUDAMOS?</h4>
              <div className="helpYou__title-line"></div>
            </div>
            <textarea rows="4">Es un hecho establecido, hace demasiado tiempo que un lector se distraerá</textarea>
            <div className="d-flex justify-content-between">
              <div className="helpYou__btns">
                <i class="fab fa-whatsapp mr-3"></i>
                <i class="fas fa-video"></i>
              </div>
              <button className="btn__gold px-2">
                Enviar
                <img src="../../../static/IMAGENES/Icon/SVG/enviar-icon.svg" alt="Pagar" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
