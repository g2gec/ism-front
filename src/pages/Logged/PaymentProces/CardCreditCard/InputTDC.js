import React from 'react';
import InputMask from 'react-input-mask';
var valid = require('card-validator');

export const InputTDC = ({ label, name, type, placeholder = '', register = null, errors, validationTdc, setValidationTdc }) => {
  const handleValidation = (e) => {
    let number = e.target.value;
    let validation = valid.number(number);
    console.log('validation', validation.isValid);
    setValidationTdc(validation.isValid);
  };

  return (
    <div class="paymentProcess__input mb-2">
      <span>Número de tarjeta</span>
      <InputMask mask="9999-9999-9999-9999" name="headLineName" type="text" placeholder="Ej: Juan" maskChar={null} {...register('tdc')} onChange={handleValidation} />
      <p className="mb-0">{errors}</p>
    </div>
  );
};
