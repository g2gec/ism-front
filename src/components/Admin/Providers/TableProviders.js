import React from 'react'

export const TableProviders = () => {
    return (
        <div className="adminTable">
        <div className="adminTable__header">
          <div className="adminTable__headerItem">
            <span>Empresa</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Servicios</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Telefono</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Correo</span>
          </div>
          <div className="adminTable__headerItem">
            <span>% margen</span>
          </div>
        </div>
        <div className="adminTable__body">
          <div className="adminTable__bodyRow">
            <div className="adminTable__bodyInput">
              <input type="radio" />
            </div>
            <div className="adminTable__bodyItem">
              <span>Restel</span>
            </div>
            <div className="adminTable__bodyItem">
              <span>Hoteles</span>
            </div>
            <div className="adminTable__bodyItem">
              <span>+56 9890000</span>
            </div>
            <div className="adminTable__bodyItem">
              <span>restel@mail.com</span>
            </div>
            <div className="adminTable__bodyItem">
              <span>30%</span>
            </div>
          </div>
        </div>
      </div>
    )
}
