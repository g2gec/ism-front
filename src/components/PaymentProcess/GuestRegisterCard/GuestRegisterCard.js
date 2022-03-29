import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleActiveGuest } from '../../../actions/payments'

import { handleModalGuestRegister } from '../../../actions/ui'
import './GuestRegisterCard.css'


export const GuestRegisterCard = ({data, index}) => {

    const dispatch = useDispatch()

    const { guestRegister } = useSelector(state => state.payment)

    const [rooms, setRooms] = useState([])
    const [adults, setAdults] = useState([])
    const [children, setChildren] = useState([])
    
    const handleGetGuest = (guest) => {
      dispatch( handleActiveGuest(guest) )
      dispatch( handleModalGuestRegister(true) )
    }

    const getRooms = (items) => {

      let getItems = items.filter(e => {
        return e.rateKey === data.rate.rateKey
      })

      let rooms = []

      let quanityRooms = getItems.map(e => {
        return e.roomId
      })

      quanityRooms = new Set(quanityRooms);

      quanityRooms = [...quanityRooms];

      return quanityRooms.length

    }
    

  const getAdults = (items) => {
    let getItems = items.filter(e => {
      return e.rateKey === data.rate.rateKey
    })

    let quanityAdults = getItems.filter(e => {
      return e.guest === "AD"
    })

    return quanityAdults.length

  }

  const getChildren = (items) => {
    let getItems = items.filter(e => {
      return e.rateKey === data.rate.rateKey
    })

    let quanityAdults = getItems.filter(e => {
      return e.guest === "CH"
    })

    return quanityAdults.length
  }

    return (
      <div className="register__guestsCard mb-4">
        <h4 className="register__guestsCard__title">{data.hotel.name.content}</h4>
        <label className="cardHotelDetails__typeRoom">{data.room.name}</label>
        <p className="cardHotelDetails__country">
          {data.hotel.zone.name} - {data.hotel.country.description.content}
        </p>
        <div className="cardHotelDetails__occupances">
          <div className="cardHotelDetails__occupancesContent">
            <p>Habitaciones</p>
            <span>{getRooms(guestRegister)} / {data.rate.rooms}</span>
          </div>
          <div className="cardHotelDetails__occupancesContent">
            <p>Adultos</p>
            <span>{getAdults(guestRegister)} / {data.rate.adults}</span>
          </div>
          <div className="cardHotelDetails__occupancesContent">
            <p>Niños</p>
            <span>{getChildren(guestRegister)} / {data.rate.children}</span>
          </div>
          <div className="cardHotelDetails__occupancesContent">
              <button className="btn__gold" onClick={() => handleGetGuest(data)}>Registrar</button>
          </div>
        </div>
      </div>
    );
}
