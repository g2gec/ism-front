import React, { useState } from 'react'
import { MainMembreships } from '../../../components/Admin/Reports/Memberships/MainMembreships'
import { MainVentas } from '../../../components/Admin/Reports/Ventas/MainVentas'
import './Reports.css'

export const Reports = () => {

    const [viewPanel, setviewPanel] = useState('memberships')

    const handleView = (view) => {
        setviewPanel(view)
    }

    return (
      <div className="reports">
        <div className="admin__mainTitle">
          <h3>Reportes</h3>
        </div>
        <div className="admin__mainPanel">
          <div className="admin__panelHeader">
            <button
              className={viewPanel === "memberships" && "admin__btnHeaderActive"}
              onClick={() => handleView("memberships")}
            >
              Membresias
            </button>
            <button
              className={viewPanel === "ventas" && "admin__btnHeaderActive"}
              onClick={() => handleView("ventas")}
            >
              Ventas
            </button>
          </div>
        {
            viewPanel === 'memberships' &&
            <MainMembreships/>
        }
        {   
            viewPanel === 'ventas' &&
            <MainVentas/>
        }
        </div>
      </div>
    );
}
