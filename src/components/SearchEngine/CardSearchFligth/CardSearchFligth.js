import React from 'react'
import './CardSearchFligth.css'

export const CardSearchFligth = () => {
    return (
        <div className="cardSearchFligth">
            <div className="cardSearchFligth__info">
                <div className="cardSearchFligth__ida">
                    <div className="cardSearchFligth__Headers">
                        <div className="cardSearchFligth__containerIda">
                            <h5>Ida</h5>
                            <span>Jue. 21 enero 2021</span>
                        </div>
                        <div className="cardSearchFligth__containerOrigin">
                            <h5>UIO</h5>
                            <span>Quito</span>
                        </div>
                        <div className="cardSearchFligth__containerDestiny">
                            <h5>BOG</h5>
                            <span>Bogotá</span>
                        </div>
                        <div className="cardSearchFligth__containerPackage">
                            <span>Equipaje</span>
                        </div>
                    </div>
                    {
                        [1,2].map((e, index) => (
                            <div className="cardSearchFligth__body mb-2">
                                <div className="cardSearchFligth__containerIdaItem">
                                    <input type="radio" />
                                    <img src="" />
                                    <label>Klm airlines</label>
                                </div>
                                <div className="cardSearchFligth__containerOriginItem">
                                    <span>07:15</span>
                                </div>
                                <div className="cardSearchFligth__containerDestinyItem">
                                    <span className="mr-2">Directo</span>
                                    <span>08:55</span>
                                </div>
                                <div className="cardSearchFligth__containerPackageItem">
                                    <div className="cardSearchFligth__itemPackages">
                                        <span>1h 40m</span>
                                        <img src="../../../static/IMAGENES/Icon/SVG/maletas-icon.svg" />
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>


                <div className="cardSearchFligth__lineDiv mb-4 mt-2"></div>


                <div className="cardSearchFligth__ida">
                    <div className="cardSearchFligth__Headers">
                        <div className="cardSearchFligth__containerIda">
                            <h5>Ida</h5>
                            <span>Jue. 21 enero 2021</span>
                        </div>
                        <div className="cardSearchFligth__containerOrigin">
                            <h5>UIO</h5>
                            <span>Quito</span>
                        </div>
                        <div className="cardSearchFligth__containerDestiny">
                            <h5>BOG</h5>
                            <span>Bogotá</span>
                        </div>
                        <div className="cardSearchFligth__containerPackage">
                            <span>Equipaje</span>
                        </div>
                    </div>
                    {
                        [1,2].map((e, index) => (
                            <div className="cardSearchFligth__body mb-2">
                                <div className="cardSearchFligth__containerIdaItem">
                                    <input type="radio" />
                                    <img src="" />
                                    <label>Klm airlines</label>
                                </div>
                                <div className="cardSearchFligth__containerOriginItem">
                                    <span>07:15</span>
                                </div>
                                <div className="cardSearchFligth__containerDestinyItem">
                                    <span className="mr-2">Directo</span>
                                    <span>08:55</span>
                                </div>
                                <div className="cardSearchFligth__containerPackageItem">
                                    <div className="cardSearchFligth__itemPackages">
                                        <span>1h 40m</span>
                                        <img src="../../../static/IMAGENES/Icon/SVG/maletas-icon.svg" />
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
            <div className="cardSearchFligth__prices">
                <div className="cardSearchFligth__pricesHead">
                    <span>Precio por adulto</span>
                    <p>USD 256</p>
                    <div className="cardSearchFligth__priceRegular mb-3">
                        <p >USD 356</p>
                        <span >Precio regular</span>
                    </div>
                    <div className="cardSearchFligth__priceTable">
                        <div className="cardSearchFligth__priceTableLeft">
                            <p>1 adulto</p>
                            <p>Imp. y tasas</p>
                            <p>Cargos</p>
                        </div>
                        <div className="cardSearchFligth__priceTableRigth">
                            <p>USD 256</p>
                            <p>USD 196</p>
                            <p>USD 73</p>
                        </div>
                    </div>
                    <div className="cardSearchFligth__priceLine"></div>
                    <div className="cardSearchFligth__priceTable d-flex justify-content-beetwen my-2 w-100">
                        <p>Precio final</p>
                        <p className="ml-auto">USD 525</p>
                    </div>
                    <div className="cardSearchFligth__priceBtn mb-2">
                        <button>
                            Añadir
                        </button>
                    </div>
                    <div className="cardSearchFligth__priceLine"></div>
                    {/* <img src="../../../static/IMAGENES/Icon/SVG/tarjeta-de-credito-icon.svg" className="img-fluid" />
                    <p>Hasta 7 meses sin intereses</p>
                    <a href="">
                        Ver tarjetas y bancos
                    </a> */}
                </div>
            </div>
        </div>
    )
}
