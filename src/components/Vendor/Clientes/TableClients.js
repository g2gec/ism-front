import React from 'react';
import { TableItemClient } from './TableItemClient';

export const TableClients = ({ setSelecteClient, clients }) => {
  return (
    <div className="vendorTable">
      <div className="vendorTable__header">
        <div className="vendorTable__headerItem">
          <span>Nombre</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Apellido</span>
        </div>
        <div className="vendorTable__headerItem">
          <span>Membresía</span>
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
        {clients.map((e) => (
          <TableItemClient key={e.id} data={e} setSelecteClient={setSelecteClient} />
        ))}
      </div>
    </div>
  );
};
