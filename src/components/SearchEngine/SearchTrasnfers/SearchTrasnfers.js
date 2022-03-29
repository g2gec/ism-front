import React, { useState } from 'react'
import { CardTransfers } from '../CardTransfers/CardTransfers'

export const SearchTrasnfers = () => {


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
                                <span>Tipo auto</span>
                            </li>
                            <li>
                                <span>Definir trayecto</span>
                            </li>
                            <li>
                                <span>Fechas trayecto</span>
                            </li>
                        </ul>
                        <div className="searchTrasnfer__btn">
                            <button className="btn__gold">
                                Ir
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="searchHotel__cardsContainer">
                        {
                            [1,2,3,4,5].map((e, index) => (
                                <CardTransfers/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
