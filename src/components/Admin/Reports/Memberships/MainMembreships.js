import React from 'react';
import { BtnExportReport } from './BtnExportReport';
import { TableMemberships } from './TableMemberships';

export const MainMembreships = () => {
  return (
    <div className="mainMemberships">
      <div className="mainClients__hedaer p-3">
        <div className="row">
          <div className="col-md-4">
            <div className="admin__inputText">
              <p>Buscar</p>
              <input type="text" placeholder="Buscar..." />
            </div>
          </div>
          {/* <div className="col-md-3">
            <div className="admin__inputSelect mb-2">
              <p>Filtrar por</p>
              <select>
                <option value="Seleccionar motor de busqueda">
                  Seleccionar filtro
                </option>
              </select>
            </div>
          </div> */}
          {/* <div className="col-md-3">
            <div className="admin__inputText">
              <p>Documento</p>
              <input type="text" placeholder="Ingrese nombre" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="admin__inputText">
              <p>Nombres</p>
              <input type="text" placeholder="Ingrese apellido" />
            </div>
          </div> */}
          {/* <div className="col-md-3 d-flex align-items-center">
            <button className="admin__btn admin__btnSearch mt-2">
              <img src="../../../static/IMAGENES/Icon/SVG/buscar-icon.svg" />
              Buscar
            </button>
          </div> */}
        </div>
      </div>
      <div className="p-3">
        <TableMemberships />
      </div>
      <BtnExportReport />
    </div>
  );
};
