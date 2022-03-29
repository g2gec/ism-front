import React from 'react';

export const TableVendorRepor = () => {
  return (
    <div className="vendorTable">
      <div className="vendorTable__header">
        <div className="vendorTable__headerItem">
          <span>Producto vendido</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Número membresía</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Fecha de venta</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Fecha caducidad</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Precio</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Estado de venta</span>
        </div>
      </div>
      <div className="vendorTable__body">
        <div className="vendorTable__bodyRow">
          {/* <div className="vendorTable__bodyInput">
            <input type="radio" />
          </div> */}
          <div className="vendorTable__bodyItem">
            <span>Membresía</span>
          </div>
          <div className="vendorTable__bodyItem">
            <span>123123</span>
          </div>
          <div className="vendorTable__bodyItem">
            <span>12/12/2021</span>
          </div>
          <div className="vendorTable__bodyItem">
            <span>12/12/2022</span>
          </div>
          <div className="vendorTable__bodyItem">
            <span>100.000</span>
          </div>
          <div className="vendorTable__bodyItem">
            <span>Completada</span>
          </div>
        </div>
      </div>
    </div>
  );
};
