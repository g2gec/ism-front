import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDetailsProduct } from '../../../actions/products'
import { handleModalProduct } from '../../../actions/ui'
import './CarTopProduct.css'

export const CardTopProduct = ({data}) => {


    const [start, setStart] = useState([])


    const dispatch = useDispatch()

    const handleViewProduct = (id) => {
        dispatch(getDetailsProduct(id))
    }

    const handleViewStars = (stars) => {
      let starsHotel =  stars.replace('EST', '')
      starsHotel = Number(starsHotel)
      let starsNumber = []
      for (let index = 0; index < starsHotel; index++) {
        starsNumber.push(index)
          
      }
      setStart(starsNumber)
    }

    useEffect(() => {
        handleViewStars(data.categoryCode)
    }, [data])

    
    return (
        <div className="cardTopProduct">
            <div className="CardTopProduct__img" style={{
                backgroundImage: `url(http://photos.hotelbeds.com/giata/bigger/${data.images[0].path})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="CardTopProduct__info">
                <h4>{data.name.content}</h4>
                <p>Desde Quito</p>
                {/* <div className="CardTopProduct__fligths">
                    <div className="CardTopProduct__infoIda">
                        <p>Ida:</p>
                        <span>Dom 24 Ene</span>
                    </div>
                    <div className="CardTopProduct__fligthsLine"></div>
                    <div className="CardTopProduct__infoVuelta">
                        <p>Vuelta:</p>
                        <span>Dom 14 Feb</span>
                    </div>
                </div> */}
                <div className="cardSearchHotel__description">
                    <div className="cardSearchHotel__points mr-3 ml-0">
                        <span>7.6</span>
                    </div>
                    {
                        start.map(e => (
                            <i class="fas fa-star"></i>

                        ))
                    }
                    {/* <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i> */}
                </div>
                <div className="CardTopProduct__infoBtn mt-4">
                    <button onClick={() => handleViewProduct(data.code)}>
                        Ver detalle
                    </button>
                </div>
            </div>
        </div>
    )
}
