import React from 'react';
import XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const BtnExportSales = ({ dataTable = [] }) => {
  const handleFomattedExcel = (dataTable) => {
    let data = [
      {
        ['Nombre vendedor']: 'Sheldon Cooper',
        ['Fecha de venta']: '29/11/2021 12:30:45',
        ['Datos membresía']: 'Membresía Gold, Nro 12654234',
        ['Precio']: '100.000',
        ['Estado de pago']: 'Aprobado',
      },
    ];

    // dataTable.forEach((element) => {
    //   let request = {
    //     ['Tipo de membresía']: 'Gold',
    //     ['Número de membresía']: '123',
    //     ['Fecha de inicio']: '28/11/2021',
    //     ['Fecha de corte']: '01/01/2022',
    //     ['Datos vendedor']: 'Steven Habif, 22.986.138, habif@mail.com',
    //   };

    //   data.push(request);
    // });

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
        <img src="../../../static/IMAGENES/Icon/SVG/descargar-icon.svg" />
        <label>Exportar base de datos Excel</label>
      </div>
    </div>
  );
};
