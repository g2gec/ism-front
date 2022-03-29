import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

export const InputAdminCurrency = ({ label, name, type, placeholder = '', register = null, errors, icon = '', className = '', max = null, setValue = null, value = null }) => {
  const [valueInput, setValueInput] = useState(value);
  const test = (e) => {
    setValue(name, e);
    setValueInput(e);
  };

  return (
    <div className={`admin__inputText ${className}`}>
      <label className="mb-0">{label}</label>
      <div className="input__container">
        <CurrencyInput
          prefix="$"
          allowNegativeValue={false}
          name={name}
          type={type}
          placeholder={placeholder}
          maxLength={max}
          {...register(name)}
          decimalsLimit={2}
          decimalSeparator=","
          groupSeparator="."
          onValueChange={test}
          value={valueInput}
        />
      </div>
      <p className="input__error">{errors}</p>
    </div>
  );
};
