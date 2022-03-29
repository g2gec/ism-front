import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import './CardGuestRegisters.css';

export const CardGuestRegisters = ({ setStepProcces }) => {
  const { roomSelected } = useSelector((state) => state.searchEngine);

  const [numberGuests, setNumberGuests] = useState([]);
  const [objGuest, setObjGuest] = useState(null);

  const handleGenerateGuestArray = (maxGuest) => {
    let i = 0;
    let totalguest = [];
    let obj = {};
    while (i < maxGuest - 1) {
      obj[`guestName${i}`] = '';
      obj[`guestSurname${i}`] = '';
      totalguest.push(i);
      i++;
    }
    setObjGuest(obj);
    setNumberGuests(totalguest);
  };

  useEffect(() => {
    handleGenerateGuestArray(roomSelected.rg_ext.capacity);
  }, []);

  const [formRegisterValues, handleRegisterInputChange] = useForm(objGuest);

  const handleArrayGuest = (numberGuest, guestObj) => {
    let arrayGuest = [];
    numberGuest.forEach((element, i) => {
      const obj = {
        first_name: guestObj[`guestName${i}`],
        last_name: guestObj[`guestSurname${i}`],
      };
      arrayGuest.push(obj);
    });
    return arrayGuest;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('numberGuests', numberGuests);
    console.log('objGuest', objGuest);
    console.log('formRegisterValues', formRegisterValues);
    console.log('lo que se va pal dispatch', handleArrayGuest(numberGuests, formRegisterValues));
    setStepProcces(2);
  };

  return (
    <div className="cardCreditCard mb-2">
      <div className="cardCreditCard__header">
        <div className="cardCreditCard__title">
          <h4>Registrar invitados ({numberGuests.length})</h4>
          <p>Ingresa el nombre de los invitados adultos</p>
        </div>
        <i className="fas fa-users"></i>
      </div>
      <form onSubmit={handleLogin}>
        {numberGuests.map((e, index) => (
          <div className="row">
            <div className="col-md-6">
              <div class="paymentProcess__input mb-2">
                <span>Nombre</span>
                <input
                  name={`guestName${index}`}
                  type="text"
                  placeholder="Ej: Juan"
                  value={formRegisterValues?.[`guestName${index}`]}
                  onChange={handleRegisterInputChange}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div class="paymentProcess__input mb-3">
                <span>Apellido</span>
                <input
                  name={`guestSurname${index}`}
                  type="text"
                  placeholder="Ej: Juan"
                  value={formRegisterValues?.[`guestSurname${index}`]}
                  onChange={handleRegisterInputChange}
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="w-100 d-flex justify-content-end align-items-end mt-3">
          <button className="btn__gold" type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};
