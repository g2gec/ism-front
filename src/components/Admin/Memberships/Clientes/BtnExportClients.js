import React from 'react'
import XLSX from 'xlsx'
import { saveAs } from 'file-saver';
// import moment from 'moment'

export const BtnExportClients = ({clients = []}) => {


    const handleFomattedExcel = (clients) => {

        let data = []

        clients.forEach(element => {
            let request = {
                Nombre: element.name,
                Apellido: element.surname,
                Documento: element.document,
                Email: element.email,
                Membresía: element.membership.name,
                ['Número membresía'] : element.membership_number,
                Duración: `${element.duration} años`,
                Costo: `${element.cost} $`
            }

            data.push(request)
        });

        return data

    }

    const handleGenerateExcel = () => {
        var wb = XLSX.utils.book_new();

        wb.Props = {
            Title: "SheetJS Tutorial",
            Subject: "Test",
            Author: "Red Stapler",
            CreatedDate: new Date(2017,12,19)
        };

        wb.SheetNames.push("Test Sheet");

        var ws_data = [['hello' , 'world']];

        var ws = XLSX.utils.json_to_sheet(handleFomattedExcel(clients));

        wb.Sheets["Test Sheet"] = ws;

        var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

        
        saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'test.xlsx');
    }

    function s2ab(s) { 
        var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf);  //create uint8array as viewer
        for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
        return buf;    
    }

    return (
        <div className="d-flex justify-content-end p-3">
            <div className="mainClients__export" onClick={handleGenerateExcel}>
                <img src="../../../static/IMAGENES/Icon/SVG/descargar-icon.svg" />
                <label>Exportar base de datos Excel</label>
            </div>
        </div>
    )
}
