import React from 'react'

export const TableItemClient = ({data, setSelecteClient}) => {

    const handleInput = (e) => {
        setSelecteClient(e.target.value)
    }
    
    return (
        <div className="vendorTable__bodyRow">
            {/* <div className="vendorTable__bodyInput">
              <input type="radio" value={data.id} onChange={handleInput} name="client" />
            </div> */}
            <div className="vendorTable__bodyItem">
              <span>{data.name}</span>
            </div>
            <div className="vendorTable__bodyItem">
              <span>{data.surname}</span>
            </div>
            <div className="vendorTable__bodyItem">
              <span>{data.document}</span>
            </div>
            <div className="vendorTable__bodyItem">
              <span>{data.email}</span>
            </div>
            <div className="vendorTable__bodyItem">
              <span>{data.membership_number}</span>
            </div>
        </div>
    )
}
