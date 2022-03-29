import React, { useState, useEffect } from 'react'
import { PromotionsCard } from '../../../components/Vendor/Promotions/PromotionsCard'
import axios from '../../../axios'

export const Promotions = () => {

    const [promotions, setPromotions] = useState([])

    const getPromotions = async() => {
        let res = await axios.get('admin/promotions')
        const {data} = res
        setPromotions(data)
    }

    useEffect(() => {
      getPromotions()
    }, [])

    return (
      <div>
        <div className="vendor__mainTitle">
          <h3>Promociones</h3>
        </div>
        <div className="vendor__mainPanel">
          <div className="vendor__panelHeader">
            <button className={"admin__btnHeaderActive"}>Motor de busqueda</button>
          </div>
          <div className="vendor__content p-4">
            {
              promotions.length > 0 ?

              promotions.map(e => (

                <PromotionsCard
                  data={e}
                  key={e.id}
                />

              ))
              :
              <p className="text-white">No hay promociones registradas</p>
            }
          </div>
        </div>
      </div>
    );
}
