import React from 'react';

export const TableVentas = () => {
  return (
    <div className="adminTable">
      <div className="adminTable__header">
        <div className="adminTable__headerItem">
          <span>Nombre vendedor</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Fecha de venta</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Datos membresía</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Precio</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Estado de pago</span>
        </div>
      </div>
      <div className="adminTable__body">
        <div className="adminTable__bodyRow">
          <div className="adminTable__bodyInput">
            <input type="radio" />
          </div>
          <div className="adminTable__bodyItem">
            <span>Sheldon Cooper</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>29/11/2021 12:30:45</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>Membresía Gold, Nro 12654234</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>100.000</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>Aprobado</span>
          </div>
        </div>
      </div>
    </div>
  );
};
