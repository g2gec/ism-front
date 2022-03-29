import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCarProductsSave } from '../../../actions/car'

export const CarBtn = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getCarProductsSave() )
    }, [])

    
    const { products } = useSelector(state => state.car)

    return (
        <div className="carBtn">
            {
                products.length > 0 &&
                <span>{products.length}</span>
            }
            <img src="../../../static/IMAGENES/Icon/SVG/carrito-icon.svg" />
            <p>Carrito</p>
        </div>
    )
}
