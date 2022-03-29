import React from 'react'
import { TravelCard } from '../../../components/TravelsHistory/TravelCard'
import './TravelsHistory.css'

export const TravelsHistory = () => {
    return (
        <div className="travelsHistory py-4">
            <div className="container">
                <div className="travelsHistory__header">
                    <h2>
                        Tus viajes
                    </h2>
                </div>
                <div className="travelsHistory__content">
                    <div className="travelsHistory__cardContainer">
                        {
                            [1,2,3].map((e, index) => (
                                <TravelCard/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
