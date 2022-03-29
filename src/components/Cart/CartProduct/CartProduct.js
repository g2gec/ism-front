import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast, Slide } from 'react-toastify';
import { deleteProductToCar } from '../../../actions/car'
import './CartProduct.css'

export const CartProduct = ({data, index, image}) => {

    const dispatch = useDispatch()
    

    const handleDeleteProduct = (id) => {
        dispatch( deleteProductToCar(id) )
        toast('Producto eliminado del carrito', {
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Slide
        });
    }

    const handleCostRoom = (total, tax) => {
        let cost = parseFloat(total) - parseFloat(tax)
        return cost.toFixed(2)
    }


    return (
        <div className="cartProduct mb-4">
            <div className="cartProduct__out">
                <span className="mr-3">
                    Item n° {index}
                </span>
                <span className="mr-3">
                    Codigo {data.room.code}
                </span>
                <img onClick={ () => handleDeleteProduct(index)} src="../static/IMAGENES/Icon/SVG/borrar-icon.svg" alt="Eliminar del carrito" />
            </div>
            <div className="cartProduct__inside">
                <div className="cartProduct__img" style={{
                    backgroundImage: `url(http://photos.hotelbeds.com/giata/bigger/${data.hotel.images[0].path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>

                </div>
                <div className="cartProduct__mainInfo">
                    <div className="cartProduct__info">
                        <p className="cartProduct__infoDate">21 agosto 2021</p>
                        <p className="cartProduct__infoCountry">{data.hotel.country.description.content}-{data.hotel.city.content}</p>
                        <h5 className="cartProduct__infoTitle">{data.hotel.name.content}</h5>
                        <p className="cartProduct__infoType">Habitacion:</p>
                        <p className="cartProduct__infoTypeDescription">{data.room.name}</p>
                    </div>
                    <div className="cartProduct__prices">
                        <div className="cartProduct__pricesLeft">
                            <p>Costo</p>
                            {/* <p>Tax, impuestos</p> */}
                            {/* <p>Ahorro</p> */}
                            <p className="cartProduct__pricesTotal">Total</p>
                        </div>
                        <div className="cartProduct__pricesRigth">
                            <p>$ {data.rate.net }</p>
                            {/* <p>{data.rate.taxes.taxes[0].currency} { handleCostRoom(data.rate.net, data.rate.taxes.taxes[0].amount) }</p> */}
                            {/* <p>{data.rate.taxes.taxes[0].currency} {data.rate.taxes.taxes[0].amount}</p> */}
                            {/* <p>USD 10</p> */}
                            {/* <p className="cartProduct__pricesTotal">{data.rate.taxes.taxes[0].currency} {data.rate.net}</p> */}
                            <p className="cartProduct__pricesTotal"> $ {data.rate.net}</p>
                        </div>
                    </div>

                    <div className="cartProduct__btns mt-3">
                        <div className="cartProduct__btnsNigths text-center mr-4">
                            <p>Habitaciones</p>
                            <span>{data.rate.rooms}</span>
                        </div>
                        <div className="cartProduct__btnsNigths text-center mr-4">
                            <p>Adultos</p>
                            <span>{data.rate.adults}</span>
                        </div>
                        <div className="cartProduct__btnsNigths text-center mr-4">
                            <p>Niños</p>
                            <span>{data.rate.children}</span>
                        </div>
                    </div>

                    {/* <div className="cartProduct__btns mt-3">
                        <div className="cartProduct__btnsNigths text-center mr-4">
                            <p>Nº noches</p>
                            <button>-</button>
                            <input className="mx-2" type="text" />
                            <button>+</button>
                        </div>
                        <div className="cartProduct__btnsRooms text-center">
                            <p>Nº habitaciones</p>
                            <button>-</button>
                            <input className="mx-2" type="text" />
                            <button>+</button>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}
