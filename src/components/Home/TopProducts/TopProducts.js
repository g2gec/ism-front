import React from 'react'
import { CardTopProduct } from './CardTopProduct'

import './TopProducts.css'

export const TopProducts = ({hotelsColombia}) => {
    return (
        <div className="topProducts pb-5">
            {/* <h3>Top destinos / Billetes de avion</h3>
            <div className="row mb-4">
                {
                    [1,2,3,4].map((e, index) => (
                        <div className="col-12 col-md-3 mb-4">
                            <CardTopProduct/>
                        </div>
                    ))
                }
            </div> */}
            <h3>Top Hoteles</h3>
            <div className="row">
                {
                    hotelsColombia.map((e, index) => (
                        <div className="col-12 col-md-3 mb-4">
                            <CardTopProduct
                                data={e}
                                key={index.code}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
