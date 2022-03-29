import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalVisit } from '../../actions/ui';
import { Visit } from '../../components/Modals/Visitanos/Visit';
import './Help.css';

export const Help = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="helpPage py-4">
      <div className="container">
        <div className="helpPage__header">
          <h2>Contactanos</h2>
        </div>
        <p className="helpPage__text text-center">Estaremos gustosos en ayudarte</p>
        <div className="helpPage__containerImages mb-5">
          <div className="helpPage__containerCardImg">
            <img onClick={() => history.push('/user/chat')} className="img-fluid" src="../../static/IMAGENES/Icon/SVG/chat-icon-gold.svg" alt="" />
            <span>Chatea con nosotros</span>
          </div>
          <div className="helpPage__containerCardImg">
            <a href="tel:593979792049" className="w-100">
              <img className="img-fluid" src="../../static/IMAGENES/Icon/SVG/llamada-icon-gold.svg" alt="" />
            </a>
            <span>Llamanos</span>
          </div>
          <div className="helpPage__containerCardImg">
            <img className="img-fluid" src="../../static/IMAGENES/Icon/SVG/asistencia-icon-gold.svg" alt="" />
            <span>Dejanos llamarte</span>
          </div>
          <div className="helpPage__containerCardImg" onClick={() => dispatch(handleModalVisit(true))}>
            <img className="img-fluid" src="../../static/IMAGENES/Icon/SVG/oficina-icon-gold.svg" alt="" />
            <span>Visitanos fisicamente</span>
          </div>
          <div className="helpPage__containerCardImg">
            <a href="https://wa.me/593979792049" className="w-100" target="_blank">
              <img className="img-fluid" src="../../static/IMAGENES/Icon/SVG/videollamada-icon-gold.svg" alt="" />
            </a>
            <span className="text-center">Visita virtual (Video llamada)</span>
          </div>
        </div>

        <h2 className="mb-4">Preguntas frecuentes</h2>
        <div className="row pb-5">
          <div className="col-12 col-md-3 ">
            <div className="helpPage__cardInfo">
              <h4>¿Cómo funciona?</h4>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="helpPage__cardInfo">
              <h4>¿Por qué?</h4>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="helpPage__cardInfo">
              <h4>¿Qué debo hacer?</h4>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="helpPage__cardInfo">
              <h4>¿Qué es?</h4>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
              <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
            </div>
          </div>
        </div>
      </div>
      <Visit />
    </div>
  );
};
