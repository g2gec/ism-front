import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast, Slide } from 'react-toastify';
import axios from '../../axios'
import { uiShowBarLoading } from '../../actions/ui'
import './RecoverPassword.css'

export const RecoverPassoword = () => {

    const dispatch = useDispatch()

    const history = useHistory();

    const [formValues, setFormValues] = useState({
        password: '',
        password_confirmation: ''
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleValidation = () => {

        if (formValues.password.length < 8) {

            toast.error('La contraseña debe tener al menos 8 caracteres', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
              });

            return false
        }

        if (formValues.password !== formValues.password_confirmation) {

            toast.error('Las contraseñas no coinciden', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
              });

            return false
        }
        return true
    }


    const handleRequestForm = async (request) => {

        if (!handleValidation()) {
            return
        }

        dispatch(uiShowBarLoading(true))

        try {
            let res = await axios.post('/customer/update-password', request)

            dispatch(uiShowBarLoading(false))

            toast('Contraseña actualizada', {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Slide
            });

            history.push('/')
            
        } catch (error) {
            console.log('error', error)
            dispatch(uiShowBarLoading(false))
        }

    }


    const handleConfirmRegister = (e) => {

        e.preventDefault()

        const urlSearchParams = new URLSearchParams(window.location.search);
        const token = urlSearchParams.get("token");
        const email = urlSearchParams.get("email");

        const request = {
            email,
            password: formValues.password,
            password_confirmation: formValues.password_confirmation,
            token
        }

        console.log('request form', request)

        handleRequestForm(request)
    }


    return (
        <div className="recoverPassword">
            <div className="container">
                <h3>Establecer contraseña</h3>
                <form onSubmit={handleConfirmRegister}>
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                    onChange={handleInputChange}
                    value={formValues.name}
                  />

                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirmar contraseña"
                    required
                    onChange={handleInputChange}
                    value={formValues.password_confirmation}
                  />
                  <button type="submit" className="btn__gold">
                        Establecer
                  </button>
                </form>
            </div>
        </div>
    )
}
