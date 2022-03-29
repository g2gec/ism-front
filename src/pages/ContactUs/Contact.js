import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiShowBarLoading } from "../../actions/ui";
import axios from "../../axios";
import { toast, Slide } from "react-toastify";

import "./ContactUs.css";

export const Contact = () => {
  const dispatch = useDispatch();

  const { barLoading } = useSelector((state) => state.ui);

  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    country: "",
    city: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    dispatch(uiShowBarLoading(true));

    try {
      let res = await axios.post("/auth/register-customer", formValues);
      dispatch(uiShowBarLoading(false));
      console.log("contact", res);

      toast("Correo electrónico enviado", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <div className="contact">
      <div className="contactUs__main">
        <div className="contact__title">
          <h3>¡Queremos trabajar contigo!</h3>
          <h4>
            Compártenos tus datos o inicia sesión para ponernos en contacto
            contigo
          </h4>
        </div>
        <div className="contactUs__containerForm">
          <div className="contactUs__containerForm-img">
            <img
              src="../../static/IMAGENES/Icon/SVG/usuario-icon.svg"
              className="img-fluid"
            />
          </div>
          <form className="contact__form" onSubmit={handleForm}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Nombre"
                  required
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Apellido"
                  required
                  onChange={handleInputChange}
                  value={formValues.surname}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  name="country"
                  placeholder="Pais"
                  required
                  onChange={handleInputChange}
                  value={formValues.country}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  name="city"
                  placeholder="Ciudad"
                  required
                  onChange={handleInputChange}
                  value={formValues.city}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  name="phone"
                  placeholder="Telefono de contacto"
                  required
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo"
                  required
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="contact__formBtn"
                disabled={barLoading}
              >
                Enviar
              </button>
            </div>
            <div className="mb-3">
              <p className="contactUs__formText">Nos contactaremos en breve</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
