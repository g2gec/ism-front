import React from 'react'
import './ContactUs.css'

export const ContactUs = () => {
    return (
        <div className="contactUs">
            <div className="contactUs__main">
                <div className="contactUs__title">
                    <h3>¡Queremos trabajar contigo!</h3>
                    <h4>Compártenos tus datos y un asesor se pondrá en contacto</h4>
                </div>
                <div className="contactUs__containerForm">
                    <div className="contactUs__containerForm-img">
                        <img src="../../static/IMAGENES/Icon/SVG/usuario-icon.svg" className="img-fluid" />
                    </div>
                    <form className="contactUs__form">
                        <div className="row">
                            <div className="col-12">
                                <input type="text" placeholder="Nombre y apellido" />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" placeholder="Pais" />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" placeholder="Ciudad" />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" placeholder="Telefono de contacto" />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" placeholder="Tipo de alojamiento" />
                            </div>
                            <div className="col-12">
                                <input type="text" placeholder="Correo" />
                            </div>
                            <div className="col-12">
                                <input type="text" placeholder="Nombre alojamiento" />
                            </div>
                            <div className="col-12">
                                <input type="text" placeholder="Dirección alojamiento" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <button className="contactUs__formBtn">
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
    )
}
