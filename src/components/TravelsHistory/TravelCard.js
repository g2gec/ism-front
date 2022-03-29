import React from 'react'
import './TravelCard.css'

export const TravelCard = () => {
    return (
        <div className="travelCard">
            <div className="travelCard__img" style={{
                backgroundImage: `url(../../../static/IMAGENES/img/quito.jpg)`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} ></div>
            <div className="travelCard__info">
                <div className="travelCard__infoTop">
                    <p className="travelCard__infoDate">21 agosto 2019</p>
                    <p className="travelCard__infoCountry">Ecuador-Quito</p>
                    <h5 className="travelCard__infoTitle">HILTON COLON</h5>
                    <p className="travelCard__infoCategory">Hotel</p>
                </div>
                <div className="travelCard__infoBottom">
                    <p className="travelCard__infoHotel">3 noches</p>
                    <p className="travelCard__infoHotel">1 habitación</p>
                    <p className="travelCard__infoHotel">Standar</p>
                </div>
            </div>
            <div className="travelCard__prices">
                    <div className="travelCard__pricesContent">
                        <div className="travelCard__pricesText">
                            <p>Costo</p>
                            <p>Tax, impuestos</p>
                            <p>Ahorro</p>
                            <p>Total</p>
                        </div>
                        <div className="travelCard__pricesAmount">
                            <p>USD 45</p>
                            <p>USD 17</p>
                            <p>USD 10</p>
                            <p>USD 52</p>
                        </div>
                    </div>
                <button className="travelCard__btn">
                    Repetir
                </button>
            </div>
        </div>
    )
}
