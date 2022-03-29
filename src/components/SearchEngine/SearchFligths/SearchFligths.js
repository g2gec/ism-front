import React from 'react'
import { CardSearchFligth } from '../CardSearchFligth/CardSearchFligth'
import './SearchFligths.css'

export const SearchFligths = () => {
    return (
        <div className="searchFligths mb-4">
            <div className="row">
                <div className="col-3">
                    <div className="searchFligths__filterContainer">
                        <h4>Filtra tu busqueda</h4>
                        <ul>
                            <li>
                                <span>Escalas</span>
                            </li>
                            <li>
                                <span>Duración del viaje</span>
                            </li>
                            <li>
                                <span>Hora de vuelos</span>
                            </li>
                            <li>
                                <span>Aerolineas</span>
                            </li>
                            <li>
                                <span>Aeropuertos</span>
                            </li>
                            <li>
                                <span>Precio</span>
                            </li>
                            <li>
                                <span>Equipake</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    <div className="searchFligths__cardsContainer">
                        {
                            [1,2,3,4,5].map((e, index) => (
                                <CardSearchFligth/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
