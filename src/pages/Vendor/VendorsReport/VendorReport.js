import React from 'react';
import { BtnExportReports } from '../../../components/Vendor/VendorReport/BtnExportReports';
import { TableVendorRepor } from '../../../components/Vendor/VendorReport/TableVendorRepor';

import './VendorReport.css';

export const VendorReport = () => {
  return (
    <div className="vendorReports">
      <div className="vendor__mainTitle">
        <h3>Reporte de ventas</h3>
      </div>
      <div className="vendor__mainPanel">
        <div className="vendor__panelHeader">
          <button className={'admin__btnHeaderActive'}>Mis ventas</button>
        </div>
        <div className="vendor__content p-4">
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>Buscar</p>
                <input type="text" placeholder="Buscar..." />
              </div>
            </div>
            {/* <div className="col-md-4">
              <div className="vendor__inputSelect mb-2">
                <p>Filtrar</p>
                <select>
                  <option value="Seleccionar motor de busqueda">Seleccionar filtro</option>
                </select>
              </div>
            </div> */}
            <div className="offset-md-4 col-md-4">
              <div className="vendorReports__comisions">
                <span className="vendorReports__comisions1">Total comisión $587</span>
                <span className="vendorReports__comisions2">Antes del corte</span>
              </div>
            </div>
          </div>
          <TableVendorRepor />
          <BtnExportReports />
        </div>
      </div>
    </div>
  );
};
