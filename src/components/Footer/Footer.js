import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
      <div className="footer pt-4">
        <div className="container d-none d-md-block">
          <div className="footer__main d-flex flex-wrap ">
            <div className="footer__column mb-3">
              <h3 className="footer__title">Contacto</h3>
              <h6 className="footer__subtitle">Dirección:</h6>
              <p className="footer__text mb-3">
                De los Motilones, Entre Bermejo y Charapa. Edificio Diamond 4.
                Quito, Ecuador
              </p>
              <h6 className="footer__subtitle">Telefono:</h6>
              <p className="footer__text mb-3">+593 (2) 3341464</p>
              <h6 className="footer__subtitle">Whatsapp:</h6>
              <p className="footer__text mb-3">+593 979792049</p>
              <h6 className="footer__subtitle">Mail:</h6>
              <p className="footer__text">
                Serviciocliente@<br></br>internationalsm.com
              </p>
            </div>
            <div className="footer__column mb-3">
              <h3 className="footer__title">Acerca de</h3>
              <p className="footer__textLink">Como funciona</p>
              <p className="footer__textLink">Costos membresía</p>
            </div>
            <div className="footer__column mb-3">
              <h3 className="footer__title">Legal</h3>
              <p className="footer__textLink">
                Términos y condiciones Privacidad
              </p>
            </div>
            <div className="footer__column mb-3">
              <h3 className="footer__title">Aliados</h3>
              <p className="footer__textLink">Hoteles</p>
              <p className="footer__textLink">Condominios</p>
              <p className="footer__textLink">Asistencia viajera</p>
            </div>
            <div className="footer__column mb-3">
              <h3 className="footer__title">Siguenos</h3>
              <p className="footer__textLink">Facebook</p>
              <p className="footer__textLink">Instagram</p>
              <p className="footer__textLink">Twitter</p>
            </div>
          </div>
        </div>
        <div class="accordion d-md-none" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Contacto
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              <h6 className="footer__subtitle">Dirección:</h6>
              <p className="footer__text mb-3">
                De los Motilones, Entre Bermejo y Charapa. Edificio Diamond 4.
                Quito, Ecuador
              </p>
              <h6 className="footer__subtitle">Telefono:</h6>
              <p className="footer__text mb-3">+593 (2) 3341464</p>
              <h6 className="footer__subtitle">Whatsapp:</h6>
              <p className="footer__text mb-3">+593 979792049</p>
              <h6 className="footer__subtitle">Mail:</h6>
              <p className="footer__text">
                Serviciocliente@<br></br>internationalsm.com
              </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Acerca de
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                <p className="footer__textLink">Como funciona</p>
                <p className="footer__textLink">Costos membresía</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Legal
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              <p className="footer__textLink">
                Términos y condiciones Privacidad
              </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Aliados
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              <h3 className="footer__title">Aliados</h3>
              <p className="footer__textLink">Hoteles</p>
              <p className="footer__textLink">Condominios</p>
              <p className="footer__textLink">Asistencia viajera</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button
                  class="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Siguenos
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
              <p className="footer__textLink">Facebook</p>
              <p className="footer__textLink">Instagram</p>
              <p className="footer__textLink">Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copy container text-center mt-md-5 py-4">
            <p className="mb-0">Copyright 2020</p>
        </div>
      </div>
    );
}

