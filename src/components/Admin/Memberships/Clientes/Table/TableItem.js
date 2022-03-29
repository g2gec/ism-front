import React from "react";

export const TableItem = ({ data, setSelecteClient }) => {
  const handleInput = (e) => {
    setSelecteClient(e.target.value);
  };

  return (
    <div className="adminTable__bodyRow">
      <div className="adminTable__bodyInput">
        <input
          type="radio"
          value={data.id}
          onChange={handleInput}
          name="client"
        />
      </div>
      <div className="adminTable__bodyItem">
        <span title={data.name}>{data.name}</span>
      </div>
      <div className="adminTable__bodyItem">
        <span title={data.surname}>{data.surname}</span>
      </div>
      <div className="adminTable__bodyItem">
        <span title={data.document}>{data.document}</span>
      </div>
      <div className="adminTable__bodyItem">
        <span title={data.email}>{data.email}</span>
      </div>
      <div className="adminTable__bodyItem">
        <span title={data.membership_number}>{data.membership_number}</span>
      </div>
    </div>
  );
};
