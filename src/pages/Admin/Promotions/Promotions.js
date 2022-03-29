import React, { useState, useEffect } from 'react'
import { CreatePromotion } from '../../../components/Admin/Promotions/CreatePromotion/CreatePromotion'
import { CardPromotion } from '../../../components/Admin/Promotions/CardPromotion/CardPromotion'
import axios from '../../../axios'

export const Promotions = () => {

    const [viewPanel, setviewPanel] = useState('existent')
    const [promotions, setPromotions] = useState([])
    const [promotionSelected, setPromotionSelected] = useState(null)

    const handlerView = (view) => {
        setviewPanel(view)
    }

    const getPromotions = async() => {
        let res = await axios.get('admin/promotions')
        const {data} = res
        setPromotions(data)
        // console.log('Obtener promociones', res)
    }

    const handleSelectedPromotion = (data) => {
      setPromotionSelected(data)
      handlerView('create')
    }

    useEffect(() => {
      if (viewPanel === 'existent') {
        getPromotions()
        setPromotionSelected(null)
      }
    }, [viewPanel])



    return (
      <div className="promotionsAdmin">
        <div className="admin__mainTitle">
          <h3>Promociones</h3>
        </div>
        <div className="admin__mainPanel">
          <div className="admin__panelHeader mb-3">
            <button
              className={viewPanel === "existent" && "admin__btnHeaderActive"}
              onClick={() => handlerView("existent")}
            >
              Existentes
            </button>
            <button
              className={viewPanel === "create" && "admin__btnHeaderActive"}
              onClick={() => handlerView("create")}
            >
              Crear
            </button>
          </div>
          <div className="admin__mainContent px-4">

            
            {viewPanel === "existent" &&  (
              
              
              promotions.map(e => (

                  <CardPromotion
                    data={e}
                    key={e.id}
                    handleSelectedPromotion={handleSelectedPromotion}
                    promotionSelected={promotionSelected}
                  />

              ))
              
            )}
            {
                promotions.length === 0 && (
                  <p>No hay promociones registradas</p>
                )
            }
          </div>
          {viewPanel === "create" && <CreatePromotion promotionSelected={promotionSelected} handlerView={handlerView} />}
        </div>
      </div>
    );
}
