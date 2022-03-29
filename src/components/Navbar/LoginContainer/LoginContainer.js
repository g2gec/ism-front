import React, { useState } from 'react';
import axios from '../../../axios';
import { useDispatch } from 'react-redux';

import './LoginContainer.css';
import { authLogin } from '../../../actions/auth';
import { handleModalForgetPassword } from '../../../actions/ui';

export const LoginContainer = () => {
  const dispatch = useDispatch();

  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  const initialValues = { email: '', password: '' };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const { email, password } = values;

    const request = {
      email: email.toLowerCase(),
      password: password,
    };

    dispatch(authLogin(request));
  };

  return (
    <div className="navbar__btn loginContainer">
      <button onClick={handleShowLogin}>
        <img className="img-fluid" src="../../../static/IMAGENES/Icon/Nativos/entrar-icon.png" />
        Iniciar sesión
      </button>
      {showLogin && (
        <div className="loginContainer__login">
          <h3>Identificate</h3>
          <form onSubmit={handleForm} autoComplete="off">
            <input type="email" placeholder="Ingresa tu correo" name="email" onChange={handleInputChange} required />
            <input type="password" placeholder="Ingresa tu contraseña" name="password" onChange={handleInputChange} required />
            <div className="loginContainer__loginBtns">
              <span onClick={() => dispatch(handleModalForgetPassword(true))} className="btn__forgetPassword">
                ¿Olvidaste tu clave?
              </span>
              <button type="submit">Iniciar sesión</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
