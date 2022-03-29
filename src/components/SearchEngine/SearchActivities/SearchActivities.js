import React, { useState } from 'react'
import { CardActivities } from '../CardActivities/CardActivities'

export const SearchActivities = () => {

    const [viewFiltersMovil, setViewFiltersMovil] = useState(false)

    const handleShowFilters = () => {
        setViewFiltersMovil(!viewFiltersMovil)
    }

    return (
        <div className="searchHotels mb-4">
            <div className="searchEngine__containerFilter">
                <div className="searchEngine__filter d-md-none" onClick={handleShowFilters}>
                    <i class="fas fa-filter"></i>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className={viewFiltersMovil ? 'searchHotels__filterContainer searchEngine__viewFiltersMovil' : 'searchHotels__filterContainer'}>
                        <h4>Filtra tu busqueda</h4>
                        <ul>
                            <li>
                                <span>Por ciudad</span>
                            </li>
                            <li>
                                <span>Nombre de la actividad</span>
                            </li>
                            <li>
                                <span>Categoria</span>
                            </li>
                            <li>
                                <span>Duración de la actividad</span>
                            </li>
                            <li>
                                <span>Actividad para</span>
                            </li>
                            <li>
                                <span>Servicios</span>
                            </li>
                            <li>
                                <span>Rango de precio</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="searchHotel__cardsContainer">
                        {
                            [1,2,3,4,5].map((e, index) => (
                                <CardActivities/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
