import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import axios from '../../axios'
import { useDispatch, useSelector } from 'react-redux'
import { handleModalForgetPassword, uiShowBarLoading } from '../../actions/ui'
import './ModalForgetPassword.css'
import { toast, Slide } from 'react-toastify';

export const ModalForgetPassword = () => {

    const dispatch = useDispatch()

    const { showForgetPasswordModal, barLoading } = useSelector( state => state.ui)

    const [email, setEmail] = useState('')

    const handleInputChange = event => {
        setEmail(event.target.value)
    }


    const handleRequest = async(request) => {

        dispatch(uiShowBarLoading(true))

        try {
            let res = await axios.post('/send-email', request)
    
            dispatch(uiShowBarLoading(false))
    
            toast('Correo electrónico enviado', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
            });
    
            console.log('response forget password', res)
            
        } catch (error) {
            dispatch(uiShowBarLoading(false))
            console.log('error', error)
        }

    }


    const handleForm = (e) => {

        e.preventDefault()

        const request = {
            email,
        }

        handleRequest(request)
    }


    return (
        <Modal
        show={showForgetPasswordModal}
        onHide={() => dispatch( handleModalForgetPassword(false) )}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Body>
                <div className="modal__btnClose d-flex justify-content-end">
                    <i className="fas fa-times" onClick={ () => dispatch( handleModalForgetPassword(false) )}></i>
                </div>
                <div className="contact__form">
                    <h3>Recuperar contraseña</h3>
                    <form onSubmit={handleForm}  autoComplete="off">
                        <input 
                          type="email"
                          placeholder="Ingresa tu correo"
                          name="email"
                          className="input__recoverPassword"
                          required
                          onChange={handleInputChange}
                          value={email}
                        />
                        <div className="d-flex justify-content-end">
                            <button type="submit" disabled={barLoading} className="btn__gold">
                                Enviar
                            </button>
                        </div>
                    </form>        
                </div>
            </Modal.Body>
        </Modal>
    )
}
