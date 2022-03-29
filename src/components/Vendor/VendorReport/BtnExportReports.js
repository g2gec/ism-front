import React from 'react';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const BtnExportReports = ({ dataTable = [] }) => {
  const handleFomattedExcel = (dataTable) => {
    let data = [
      {
        ['Producto vendido']: 'Membresía Test',
        ['Número membresía']: '1543123',
        ['Fecha de venta']: '29/11/2021',
        ['Fecha caducidad']: '29/11/2021',
        ['Precio']: '300.000',
        ['Estado de venta']: 'Aprobado',
      },
    ];

    return data;
  };

  const handleGenerateExcel = () => {
    var wb = XLSX.utils.book_new();

    wb.Props = {
      Title: 'SheetJS Tutorial',
      Subject: 'Test',
      Author: 'Red Stapler',
      CreatedDate: new Date(2017, 12, 19),
    };

    wb.SheetNames.push('Test Sheet');

    var ws_data = [['hello', 'world']];

    var ws = XLSX.utils.json_to_sheet(handleFomattedExcel(dataTable));

    wb.Sheets['Test Sheet'] = ws;

    var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), 'ventas.xlsx');
  };

  function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
    return buf;
  }
  return (
    <div className="d-flex justify-content-end p-3">
      <div className="mainClients__export" onClick={handleGenerateExcel}>
        <img
          src="../../../static/IMAGENES/Icon/SVG/descargar-icon.svg"
          style={{
            filter: 'invert(1)',
          }}
        />
        <label class="text-white">Exportar base de datos Excel</label>
      </div>
    </div>
  );
};
