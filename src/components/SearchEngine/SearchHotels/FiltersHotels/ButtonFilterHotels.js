import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { handleHotelFilters } from '../../../../actions/searchEngine';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? '#fff' : '#6B6CB0',
    padding: 2,
  }),
  control: () => ({
    background: 'white',
    borderRadius: '8px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export const ButtonFilterHotels = ({ name, type = null, options = [], inputName = null }) => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [value, setvalue] = useState(null);
  let typingTimer = null;

  const handleActive = () => {
    setActive(!active);
  };

  const handleInputChange = (e) => {
    console.log(e);
    let obj = {
      name: inputName,
      value: null,
    };
    if (type === 'select') {
      obj.value = e.value;
    }
    if (type === 'search') {
      obj.value = e.target.value;
    }
    setvalue(obj);
  };

  useEffect(() => {
    let isSubcribed = true;
    if (type === 'search') {
      if (isSubcribed) {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
          if (value) {
            dispatch(handleHotelFilters(value));
          }
        }, 800);
      }
    } else {
      if (value) {
        dispatch(handleHotelFilters(value));
      }
    }
    return () => {
      console.log('componente desmontado');
      clearTimeout(typingTimer);
      isSubcribed = true;
    };
  }, [dispatch, value]);

  return (
    <li>
      <div className="buttonFilterHotels" onClick={handleActive}>
        <span>{name}</span>
        {active ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
      </div>
      {active && (
        <div className="buttonFilterHotels__dropdown mb-2">
          {type === 'search' && <input className="buttonFilterHotels__input" type="text" placeholder="Ingrese el nombre" onChange={handleInputChange} />}
          {type === 'select' && (
            <Select
              placeholder={'Seleccionar'}
              styles={customStyles}
              options={options}
              components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              onChange={handleInputChange}
            />
          )}
          {type === 'range' && (
            <>
              <div className="d-flex w-100">
                <CurrencyInput
                  prefix="$"
                  allowNegativeValue={false}
                  placeholder={'Mínimo'}
                  decimalsLimit={2}
                  decimalSeparator=","
                  groupSeparator="."
                  className="buttonFilterHotels__inputRange mr-3"
                  onChange={handleInputChange}
                />
                <CurrencyInput
                  prefix="$"
                  allowNegativeValue={false}
                  placeholder={'Máximo'}
                  decimalsLimit={2}
                  decimalSeparator=","
                  groupSeparator="."
                  className="buttonFilterHotels__inputRange mr-3"
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          {type === 'multi-select' && (
            <Select
              placeholder={'Seleccionar'}
              styles={customStyles}
              isMulti
              components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              options={options}
              onChange={handleInputChange}
            />
          )}
        </div>
      )}
    </li>
  );
};
