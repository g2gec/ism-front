import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Banks } from '../../components/Home/Banks/Banks'
import { Billboard } from '../../components/Home/Billboard/Billboard'
import { BillboardLogged } from '../../components/Home/BillboardLogged/BillboardLogged'
import { CardProduct } from '../../components/Home/CardProduct/CardProduct'
import { SponsorsLoged } from '../../components/Home/SponsorsLogged/SponsorsLoged'
import { TopProducts } from '../../components/Home/TopProducts/TopProducts'
import { PromotionLoged } from '../../components/Home/PromotionLoged/PromotionLoged'

import './Home.css'
import { HotelDetails } from '../../components/Modals/Products/HotelDetails/HotelDetails'
import bedsOnline from '../../api/bedsonline/bedsonline'
import { uiShowBarLoading } from '../../actions/ui'

export const Home = () => {

    const dispatch = useDispatch()


    const filterTopHotel = (hotels) => {
        let topHotels = hotels.filter(e => {
            return e.categoryCode === "5EST"
        })
        
        return topHotels.slice(0, 8)
    }


    const [hotelsColombia, sethotelsColombia] = useState([])

    const request = {
        endpoint: '/hotel-content-api/1.0/hotels?fields=all&countryCode=EC&language=CAS&from=1&to=20&useSecondaryLanguage=false'
    }


    async function getHotelsColombia() {
        dispatch( uiShowBarLoading(true) )
        bedsOnline.post('/apicontent', request).then((res) => {
            
            sethotelsColombia(filterTopHotel(res.hotels))
            console.log('response', hotelsColombia)
            dispatch( uiShowBarLoading(false) )
        })
        .catch((e)=>{
            dispatch( uiShowBarLoading(false) )
            return false;
        })
    }

    useEffect(() => {
        getHotelsColombia()
    }, [])




    const { user } = useSelector(state => state.auth)
    const { productSelected } = useSelector(state => state.products)

    return (
        <div className={user ? 'w-100 home__logedActive' : 'w-100'}>

            {
                !user ? (
                    <Billboard/>
                ) : (
                    <BillboardLogged/>
                )
            }
            {
                user && 
                <SponsorsLoged/>
            }
            <div className="home__products container mt-5">
            {
                user && 
                <div className="home__productsPrmotion py-5">
                        <PromotionLoged
                        className="w-75"
                        />
                </div>
            }
                <div className="row">
                        {
                            [1,2,3,4,5,6].map((e, index) => (
                                <div className="col-12 col-md-4 mb-4">
                                <CardProduct
                                key={index}
                                />
                                </div>
                            ))
                        }
                </div>
            </div>
            <div className="container">
            <Banks/>
            {
                user && 
                <TopProducts
                    hotelsColombia={hotelsColombia}
                />
            }


            </div>

            {
                productSelected &&
                <HotelDetails />
            }



        </div>
    )
}
