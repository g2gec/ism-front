import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { uiShowBarLoading } from '../../../../../actions/ui'
import axios from '../../../../../axios'
import { TableItem } from './TableItem'

export const Table = ({setSelecteClient, clients}) => {

  const dispatch = useDispatch()

  
    return (
      <div className="adminTable">
        <div className="adminTable__header">
          <div className="adminTable__headerItem">
            <span>Nombre</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Apellido</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Nº identificación</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Correo</span>
          </div>
          <div className="adminTable__headerItem">
            <span>Nº membresia</span>
          </div>
        </div>
        <div className="adminTable__body">
        {
          clients.map(e => (
            <TableItem
              key={e.id}
              data={e}
              setSelecteClient={setSelecteClient}
            />
          ))
        }
        </div>
      </div>
    );
}
