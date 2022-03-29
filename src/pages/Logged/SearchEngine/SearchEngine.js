import React from 'react'
import { BillboardLogged } from '../../../components/Home/BillboardLogged/BillboardLogged'
import { SearchHotels } from '../../../components/SearchEngine/SearchHotels/SearchHotels'
import { SearchActivities } from '../../../components/SearchEngine/SearchActivities/SearchActivities'
import { SearchTrasnfers } from '../../../components/SearchEngine/SearchTrasnfers/SearchTrasnfers'

import './SearchEngine.css'

export const SearchEngine = () => {
    return (
        <div>
            <BillboardLogged/>
            <div className="container py-4">
                <div className="searchEngine__title mb-4">
                    <h4>Hoteles</h4>
                    <span>125 hoteles</span>
                </div>
                <SearchHotels/>
                <div className="searchEngine__title mb-4">
                    <h4>Actividades</h4>
                    <span>125 actividades</span>
                </div>
                <SearchActivities/>
                <div className="searchEngine__title mb-4">
                    <h4>Traslados</h4>
                    <span>12 opciones</span>
                </div>
                <SearchTrasnfers/>
            </div>
        </div>
    )
}
