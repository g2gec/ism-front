import React, { useState, useEffect } from 'react'

import './RegisterGuest.css'
import { useSelector, useDispatch } from 'react-redux'

import Modal from 'react-modal';
import { handleModalGuestRegister } from '../../../../actions/ui';
import { addRegisterGuest } from '../../../../actions/payments';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')


export const RegisterGuest = ({setShowModalMap}) => {

    const dispatch = useDispatch()

    const { showModalGuestRegister } = useSelector(state => state.ui)
    const { guestRegisterSelected } = useSelector(state => state.payment)
    const { guestRegister } = useSelector(state => state.payment)


    const [rooms, setRooms] = useState([])
    const [adults, setAdults] = useState([])
    const [children, setChildren] = useState([])

    const [adultsConfirm, setAdultsConfirm] = useState([])

    const handleCloseModal = () => {
        dispatch( handleModalGuestRegister(false) )
    }

    const getRooms = (data) => {
        let quanityRooms = [];
        let index = 1
        while (index <= data.rate.rooms) {
          let obj = {
            id: index,
            confirm: false
          }
          quanityRooms.push(obj)

          index++
        }
        return quanityRooms
        setRooms(quanityRooms)
        console.log(rooms)
    }

    const getAdults = (data) => {
        let quanityAdults = [];
        for (let index = 0; index < data.rate.adults; index++) {
          let obj = {
            id: index,
            confirm: false
          }
          quanityAdults.push(obj)
        }
        setAdults(quanityAdults)
    }

    const getChildren = (data) => {
      let quanityChildrens = [];
      for (let index = 0; index < data.rate.children; index++) {
        let obj = {
          id: index,
          confirm: false
        }
        quanityChildrens.push(obj)
      }
      setChildren(quanityChildrens)
    }

    useEffect(() => {
      if (guestRegisterSelected) {
        getRooms(guestRegisterSelected)
        getAdults(guestRegisterSelected)
        getChildren(guestRegisterSelected)
      }
    }, [guestRegisterSelected])


    const handleSubmit = event => {

      event.preventDefault();

      let formid = event.target.attributes[1].value

      let formValues = {};
      var form1Inputs = document.forms[formid].getElementsByTagName("input");
      for(let i=0; i<form1Inputs.length; i++){
            formValues[form1Inputs[i].name]=form1Inputs[i].value;
      }
      var form1Select = document.forms[formid].getElementsByTagName("select");
      for(let i=0; i<form1Select.length; i++){
            formValues[form1Select[i].name]=form1Select[i].value;
      }

      let register = adultsConfirm

      formValues.rateKey = guestRegisterSelected.rate.rateKey


      register.push(formValues)

      setAdultsConfirm(register)

      let button = document.getElementById(`btnFormGuest${formValues.id}`)

      button.classList.add('d-none');

      dispatch( addRegisterGuest(formValues) )
      
    }

    const handleSubmitChildren = event => {

      event.preventDefault();

      let formid = event.target.attributes[1].value

      let formValues = {};
      var form1Inputs = document.forms[formid].getElementsByTagName("input");
      for(let i=0; i<form1Inputs.length; i++){
            formValues[form1Inputs[i].name]=form1Inputs[i].value;
      }
      var form1Select = document.forms[formid].getElementsByTagName("select");
      for(let i=0; i<form1Select.length; i++){
            formValues[form1Select[i].name]=form1Select[i].value;
      }

      let register = adultsConfirm

      formValues.rateKey = guestRegisterSelected.rate.rateKey

      console.log('formValues', formValues)


      register.push(formValues)

      setAdultsConfirm(register)

      let button = document.getElementById(`btnFormGuestCH${formValues.id}`)

      button.classList.add('d-none');

      dispatch( addRegisterGuest(formValues) )
      
    }

    const getRegistersAdults = (items) => {
      let getItems = items.filter(e => {
        return e.rateKey === guestRegisterSelected.rate.rateKey
      })
  
      let quanityAdults = getItems.filter(e => {
        return e.guest === "AD"
      })
  
      return quanityAdults.length
  
    }

    const getRegistersChildren = (items) => {
      let getItems = items.filter(e => {
        return e.rateKey === guestRegisterSelected.rate.rateKey
      })
  
      let quanityChildrens = getItems.filter(e => {
        return e.guest === "CH"
      })
  
      return quanityChildrens.length
  
    }



    return (
      <Modal
        isOpen={showModalGuestRegister}
        style={customStyles}
        className="modal2"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <div className="container modal__registerGuest">
          <div className="modalProductDetails__header mb-4">
            <div className="modalProductDetails__title">
              <h4>Registrar Huéspedes</h4>
            </div>
            <button
              type="button"
              className="modalProductDetails__btnClose"
              onClick={handleCloseModal}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          {getRegistersAdults(guestRegister) < adults.length ? (
            <>
              {adults.length > 0 && <h5>Adultos</h5>}
              {adults.map((e, index) => (
                <form
                  onSubmit={handleSubmit}
                  className="form__registerGuest mb-3"
                  id={`formGuest${index}`}
                >
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="paymentProcess__input">
                        <span>Nombre</span>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Ej: Juan"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="paymentProcess__input">
                        <span>Apellido</span>
                        <input
                          type="text"
                          name="surname"
                          required
                          placeholder="Ej: Perez"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="paymentProcess__select">
                        <span>Habitación</span>
                        <select name="roomId" required>
                          <option value="">Seleccione las opciones</option>
                          {getRooms(guestRegisterSelected).map((e, index) => (
                            <option value={index + 1}>
                              Habitacion {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <input type="hidden" name="guest" value="AD" />
                    <input type="hidden" name="id" value={e.id} />
                    <div className="col-md-3">
                      <button
                        type="submit"
                        className="btn__gold ml-3 mt-3"
                        id={`btnFormGuest${e.id}`}
                      >
                        Confirmar
                      </button>
                    </div>
                  </div>
                </form>
              ))}
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center flex-column align-items-center text-center">
                <h5 className="">Adultos registrados</h5>
                {/* <span className="paymentProcess__retryRegister text-center">Volver a registrar</span> */}
              </div>
            </>
          )}
          <div className="">
            {getRegistersChildren(guestRegister) < children.length ? (
              <>
              {children.length > 0 && <h5>Niños</h5>}
              {children.map((e, index) => (
                <form className="form__registerGuest mb-3" onSubmit={handleSubmitChildren} id={`formGuestChildren${index}`}>
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="paymentProcess__input">
                        <span>Nombre</span>
                        <input type="text" name="name" placeholder="Ej: Juan" required/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="paymentProcess__input">
                        <span>Apellido</span>
                        <input type="text" name="surname" placeholder="Ej: Perez" required/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="paymentProcess__select">
                        <span>Habitación</span>
                        <select name="roomId" name="roomId" required>
                          <option value="">Seleccione las opciones</option>
                          {getRooms(guestRegisterSelected).map((e, index) => (
                            <option value={index + 1}>
                              Habitacion {index + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <input type="hidden" name="guest" value="CH" />
                    <input type="hidden" name="id" value={e.id} />
                    <div className="col-md-3">
                      <button className="btn__gold ml-3 mt-3" id={`btnFormGuestCH${e.id}`}>Registrar</button>
                    </div>
                  </div>
                </form>
              ))}
              </>
              
            ) : (
              <div className="d-flex justify-content-center flex-column align-items-center text-center">
                <h5 className="">Niños registrados</h5>
                {/* <span className="paymentProcess__retryRegister text-center">Volver a registrar</span> */}
              </div>
            )
            
            }

              
            
          </div>
        </div>
      </Modal>
    );
}
