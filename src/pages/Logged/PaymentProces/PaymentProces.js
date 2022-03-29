import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './PaymentProces.css';

import { CardPaymentDetails } from '../../../components/PaymentProcess/CardPaymentDetails/CardPaymentDetails';
import { CardHotelDetails } from '../../../components/PaymentProcess/CardHotelDetails/CardHotelDetails';
import { GuestRegisterCard } from '../../../components/PaymentProcess/GuestRegisterCard/GuestRegisterCard';
import { RegisterGuest } from '../../../components/Modals/RegisterInProducts/RegisterGuest/RegisterGuest';
import { CardCreditCard } from './CardCreditCard/CardCreditCard';
import { CardGuestRegisters } from './CardGuestsRegister/CardGuestRegisters';

export const PaymentProces = () => {
  const { products } = useSelector((state) => state.car);

  const [rooms, setRooms] = useState([]);
  const [stepProcces, setStepProcces] = useState(1);

  const [headLine, setHeadLine] = useState({
    headLineName: '',
    headLineSurname: '',
    headLineStituation: '',
    headLineTypeDoc: '',
    headLineDoc: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHeadLine({ ...headLine, [name]: value });
  };

  const constuctRequestRooms = () => {
    const request = {
      rooms: [],
    };

    products.forEach((element) => {});
  };

  const handlePayment = () => {
    console.log('headLine', headLine);

    const request = {
      holder: {
        name: headLine.headLineName,
        surname: headLine.headLineSurname,
      },
      rooms: [],
      clientReference: 'IntegrationAgency',
      remark: 'Test',
    };
  };

  const handleGetRooms = () => {
    let getRooms = products.filter((e) => {
      return e.category === 'Room';
    });
    setRooms(getRooms);
  };

  useEffect(() => {
    handleGetRooms();
  }, [products]);

  return (
    <div className="paymentProces py-4">
      <div className="container">
        <div className="paymentProces__head mb-4">
          <h2>Proceso de pago</h2>
        </div>
        <div className="row">
          <div className="col-8 paymentProces__payments">
            {stepProcces === 1 && <CardGuestRegisters setStepProcces={setStepProcces} />}
            {stepProcces === 2 && <CardCreditCard setStepProcces={setStepProcces} />}

            {/* <div className="paymentProces__optionsContainer">
              <div className="paymentProces__option">
                <input type="radio" name="paymet__option" />
                <label>Tarjeta de credito</label>
              </div>
              <div className="paymentProces__option">
                <input type="radio" name="paymet__option" />
                <label>Transferencia Bancaria</label>
              </div>
              <div className="paymentProces__option">
                <input type="radio" name="paymet__option" />
                <label>Depósito bancario</label>
              </div>
            </div> */}

            <div className="paymentProces__info">
              {/* <h4 className="mb-4">¿A nombre de quién emitimos la factura?</h4> */}

              {/* <div className="row">
                <div className="col-12 col-md-4 d-flex flex-column mb-3">
                  <div className="paymentProcess__select">
                    <span>Situacion fiscal</span>
                    <select name="headLineStituation" value={headLine.headLineStituation} onChange={handleInputChange}>
                      <option>Seleccione las opciones</option>
                      <option value="1">Opción 1</option>
                      <option value="2">Opción 1</option>
                      <option value="3">Opción 1</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column mb-3">
                  <div className="paymentProcess__select">
                    <span>Tipo de documento</span>
                    <select name="headLineTypeDoc" value={headLine.headLineTypeDoc} onChange={handleInputChange}>
                      <option>Seleccione las opciones</option>
                      <option value="CC">Opción CC</option>
                      <option value="CE">Opción CE</option>
                      <option value="VE">Opción VE</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column mb-3">
                  <div className="paymentProcess__input">
                    <span>Cedula de identidad</span>
                    <input name="headLineDoc" value={headLine.headLineDoc} onChange={handleInputChange} type="text" placeholder="Ingrese numero de identificación" />
                  </div>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-12 col-md-4 d-flex flex-column mb-3">
                  <div className="paymentProcess__input">
                    <span>Nombre</span>
                    <input name="headLineName" value={headLine.headLineName} onChange={handleInputChange} type="text" placeholder="Ej: Juan" />
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex flex-column mb-3">
                  <div className="paymentProcess__input">
                    <span>Apellido</span>
                    <input name="headLineSurname" value={headLine.headLineSurname} onChange={handleInputChange} type="text" placeholder="Ej: Perez" />
                  </div>
                </div>
              </div> */}

              {/* <h4 className="mb-4">Documentación requerida</h4> */}

              {/* <div className="row mb-4">
                <div className="col-12 col-md-8">
                  <h6>Vuelo</h6>
                  <p>Para poder hacer este viaje, los pasajeros ecuatorianos necesitarán contar con cierta documentación:</p>

                  <h6>Ecuador</h6>
                  <p>Resultado de prueba PCR (realizada en el periodo de 72 horas previas de la partida del vuelo) que compruebe negativo para Covid 19.</p>

                  <p>Certificado de vacunación contra la fiebre amarilla (sólo si se estuvo en países en riesgo)</p>
                </div>
              </div> */}

              {/* <h4 className="mb-4">Registro de huéspedes</h4>

              {rooms.map((e, index) => (
                <GuestRegisterCard data={e} key={index} index={index} />
              ))} */}

              {/* <div className="register__guestsList">
                                <div className="register__guestsCard">
                                    <h4>{data.hotel.name.content}</h4>
                                    <label className="cardHotelDetails__typeRoom">{data.room.name}</label>
                                    <p className="cardHotelDetails__country">{data.hotel.zone.name} - {data.hotel.country.description.content}</p>
                                    <div className="cardHotelDetails__occupances">
                                        <div className="cardHotelDetails__occupancesContent">
                                            <p>Habitaciones</p>
                                            <span>{data.rate.rooms}</span>
                                        </div>
                                        <div className="cardHotelDetails__occupancesContent">
                                            <p>Adultos</p>
                                            <span>{data.rate.adults}</span>
                                        </div>
                                        <div className="cardHotelDetails__occupancesContent">
                                            <p>Niños</p>
                                            <span>{data.rate.children}</span>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

              {/* <h4 className="mb-4">¿Quiénes viajan?</h4>

                            <h6>Adulto 1</h6>
                            <div className="row mb-4 ">
                                <div className="col-12 col-md-4 d-flex flex-column">
                                    <span>Nombres</span>
                                    <input type="text" placeholder="Ej: Juan Perez" />
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column">
                                    <span>Apellidos</span>
                                    <input type="text" placeholder="Ej: Juan Perez" />
                                </div>
                            </div>
                                <div className="row">
                                    <div className="col-12 col-md-4 d-flex flex-column">
                                        <span>Tipo de documento</span>
                                        <select>
                                            <option>Seleccione las opciones</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4 d-flex flex-column">
                                        <span>Cedula de identidad</span>
                                        <input type="text" placeholder="Ingrese numero de identificación" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <span>PAÍS DE RESIDENCIA</span>
                                        <select>
                                            <option>Seleccione las opciones</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <span>PAÍS DE RESIDENCIA</span>
                                        <select>
                                            <option>Seleccione las opciones</option>
                                        </select>
                                    </div>
                                </div>
                                    <h6>Fecha de nacimiento</h6>
                                <div className="row">
                                    <div className="col-12 col-md-3">
                                    <select>
                                        <option>Dia</option>
                                    </select>
                                    </div>
                                    <div className="col-12 col-md-3">
                                    <select>
                                        <option>Mes</option>
                                    </select>
                                    </div>
                                    <div className="col-12 col-md-3">
                                    <select>
                                        <option>Año</option>
                                    </select>
                                    </div>
                                </div> */}

              {/* <div className="row my-4">
                <div className="col-12 col-md-8">
                  <h4 className="my-4">¿A dónde enviamos tus vouchers?</h4>

                  <p>El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.</p>

                  <div className="col-12 col-md-9 d-flex flex-column mb-3 px-0">
                    <div className="paymentProcess__input">
                      <span>Email {'(Donde recibirás tus vouchers)'}</span>
                      <input type="email" placeholder="Ingresa mail de contacto" />
                    </div>
                  </div>

                  <div className="col-12 col-md-9 d-flex flex-column mb-3 px-0">
                    <div className="paymentProcess__input">
                      <span>Confirma tu email</span>
                      <input type="email" placeholder="Ingresa tu email" />
                    </div>
                  </div>

                  <div className="paymentVoucher__offerts">
                    <div className="paymentVoucher__offertsInput mr-3">
                      <input type="checkbox"></input>
                    </div>
                    <div className="paymentVoucher__offertsInputText">
                      <label>¡Quiero recibir las mejores ofertas!</label>
                      <label className="paymentVoucher__offertsPromo">
                        Recibirás emails y llamados telefónicos de Despegar con las mejores promociones para tu viaje. Si no lo deseas, destilda este mensaje. Para más información
                        consulta las políticas de privacidad.
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-12 col-md-8">
                  <h4 className="my-4">¿A qué número podemos llamarte?</h4>

                  <p>El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.</p>

                  <div className="col-12 col-md-9 d-flex flex-column mb-3 px-0">
                    <div className="paymentProcess__select">
                      <span>Teléfono</span>
                      <select>
                        <option>Seleccione las opciones</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-12 col-md-9 d-flex flex-column mb-3 px-0">
                    <div className="paymentProcess__select">
                      <span>Codigo país</span>
                      <select>
                        <option>Seleccione las opciones</option>
                      </select>
                    </div>
                  </div>
                  <div className="row pl-3">
                    <div className="col-12 col-md-4 d-flex flex-column mb-3 px-0">
                      <div className="paymentProcess__input">
                        <span>Area</span>
                        <input type="email" placeholder="Ingresa mail de contacto" />
                      </div>
                    </div>

                    <div className="col-12 offset-md-1 col-md-4 d-flex flex-column mb-3 px-0">
                      <div className="paymentProcess__input">
                        <span>Número</span>
                        <input type="email" placeholder="Ingresa mail de contacto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-12 col-md-8">
                  <h4 className="my-4">Antes de finalizar revisa los datos ingresados</h4>

                  <p>El email que elijas será fundamental para que gestiones tu reserva y recibas información importante sobre tu viaje.</p>
                </div>
              </div> */}
              {/* 
              <div className="row my-4">
                <div className="col-12 col-md-12">
                  <h4 className="my-4">Asistencia de viajero</h4>

                  <div className="travelerAssistence">
                    <div className="travelerAssistence__info">
                      <h5>ASSITCARD</h5>
                      <p>Asistencia médica hasta USD 40.000</p>
                      <p>Asistencia en caso de robo o extravío de documentos</p>
                      <p>Localización de equipajes</p>
                    </div>
                    <div className="travelerAssistence__amount">
                      <p>Por 11 días para 1 persona</p>
                      <p className="travelerAssistence__amountOld">Antes:59</p>
                      <p>
                        USD: <span>42</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="row my-4">
                <div className="paymentProces__paymentBtns">
                  <div className="paymentProces__paymentBtnsContet">
                    <button className="btn__gold mb-2" onClick={handlePayment}>
                      Comprar sin asistencia
                    </button>
                    <p>
                      Total a pagar <span>USD 518</span>
                    </p>
                  </div>
                  <div className="paymentProces__paymentBtnsContet">
                    <button className="btn__gold mb-2" onClick={handlePayment}>
                      Comprar con asistencia
                    </button>
                    <p>
                      Total a pagar <span>USD 560</span>
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-4">
            <h5 className="paymentProces__titleDetails">Detalle del pago</h5>
            <div className="paymentProces__cardDetails">
              <CardPaymentDetails />
            </div>
            {/* <h5 className="paymentProces__titleDetails">Detalle de la compra</h5> */}
            <div className="paymentProces__cardDetails">
              {rooms.map((e) => (
                <CardHotelDetails data={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <RegisterGuest />
    </div>
  );
};
