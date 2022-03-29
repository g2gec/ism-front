import React from 'react'
import './CardHotelDetails.css'

export const CardHotelDetails = ({data}) => {
    return (
        <div className="cardHotelDetails mb-3">
            <img src="../../../static/IMAGENES/Icon/SVG/hospedaje_hospedaje-icon.svg" />
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
            <div className="cardHotelDetails__occupances">
                <div className="cardHotelDetails__occupancesContent">
                    <p>Check in</p>
                    <span>{data.room.checkIn}</span>
                </div>
                <div className="cardHotelDetails__occupancesContent">
                    <p>Check out</p>
                    <span>{data.room.checkOut}</span>
                </div>
            </div>
            <div className="cardHotelDetails__line"></div>
            <div className="cardHotelDetails_politics">
                <p className="cardHotelDetails_politicsTitle">Política de cambios y cancelaciones</p>

                <p className="cardHotelDetails_politicsSubtitle">Cambios</p>
                <div className="cardHotelDetails_politicsItem">
                    <img src="../../../static/IMAGENES/Icon/SVG/check-icon.svg" />
                    <p>Permite (sujeto a diferencia tarifaria)</p>
                </div>
                <p className="cardHotelDetails_politicsSubtitle">Cancelación</p>
                <div className="cardHotelDetails_politicsItem">
                    <img src="../../../static/IMAGENES/Icon/SVG/check-icon.svg" />
                    <p>Permite (con costo)</p>
                </div>
                <div className="cardHotelDetails_politicsBtn">
                    <a>Ver política de cambios y cancelaciones</a>
                </div>
            </div>

        </div>
    )
}
