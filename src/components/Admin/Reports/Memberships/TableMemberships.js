import React from 'react';

export const TableMemberships = () => {
  return (
    <div className="adminTable">
      <div className="adminTable__header">
        <div className="adminTable__headerItem">
          <span>Tipo de membresía</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Número de membresía</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Fecha de inicio</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Fecha de corte</span>
        </div>
        <div className="adminTable__headerItem">
          <span>Datos vendedor</span>
        </div>
      </div>
      <div className="adminTable__body">
        <div className="adminTable__bodyRow">
          <div className="adminTable__bodyInput">
            <input type="radio" />
          </div>
          <div className="adminTable__bodyItem">
            <span title="Gold">Gold</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>123</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>28/11/2021</span>
          </div>
          <div className="adminTable__bodyItem">
            <span>01/01/2022</span>
          </div>
          <div className="adminTable__bodyItem">
            <span title="Steven Habif, 22.986.138, habif@mail.com">Steven Habif, 22.986.138, habif@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
