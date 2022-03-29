import React, { useState } from 'react'
import { FormProvider } from '../../../components/Admin/Providers/FormProvider'
import { TableProviders } from '../../../components/Admin/Providers/TableProviders'
import './Providers.css'

export const Providers = () => {

    const [viewPanel, setviewPanel] = useState('main')

    const handlerView = (view) => {
        setviewPanel(view)
    }

    return (
      <div className="providers">
        <div className="admin__mainTitle">
          <h3>Provedores</h3>
        </div>
        <div className="admin__mainPanel">
          <div className="admin__panelHeader mb-3">
            <button
              className={viewPanel === "main" && "admin__btnHeaderActive"}
              onClick={() => handlerView("main")}
            >
              Lista de proveedores
            </button>

          </div>
          <div className="admin__mainContent px-4 pb-4">
          {viewPanel === "main" && (
              <>
                <div className="provider__textSeach d-flex justify-content-end mb-3">
                    <span className="mr-3">Seleccione el provedor</span>
                    <button className="admin__btn admin__btnSearch" onClick={() => handlerView("create")}>
                        <img src="../../../static/IMAGENES/Icon/SVG/buscar-icon.svg" />
                        Buscar
                    </button>
                    </div>
              </>
            )}
            {viewPanel === "main" && (
              <>
                <TableProviders />
              </>
            )}
          </div>
          {viewPanel === "create" && <FormProvider />}
        </div>
      </div>
    );
}
