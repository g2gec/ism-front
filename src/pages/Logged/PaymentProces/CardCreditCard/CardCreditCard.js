import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, Slide } from 'react-toastify';
import { ShowCreditCards } from '../../../../components/UI/ShowCreditCards/ShowCreditCards';
import './CardCreditCard.css';
import { expresiones } from '../../../../helpers/regex';
import { InputTDC } from './InputTDC';
import { paymentRatehawkTDC } from '../../../../actions/payments';

const schema = yup.object().shape({
  tdc: yup.string().required('Campo requerido'),

  card_holder: yup.string().required('Campo requerido').matches(expresiones.name, 'Caracteres invalidos'),

  month: yup.string().required('Campo requerido').min(2, 'Debe tener 2 números').matches(expresiones.numbers, 'Caracteres invalidos'),

  year: yup.string().required('Campo requerido').min(2, 'Debe tener 4 números').matches(expresiones.numbers, 'Caracteres invalidos'),

  cvc: yup.string().required('Campo requerido').matches(expresiones.numbers, 'Caracteres invalidos'),
});

export const CardCreditCard = ({ setStepProcces }) => {
  const dispatch = useDispatch();

  const { hotelSelected, createBooking } = useSelector((state) => state.searchEngine);
  const { user } = useSelector((state) => state.auth);

  const [payuuid, setPayuuid] = useState(uuidv4());
  const [inituuid, setInituuid] = useState(uuidv4());

  const [validationTdc, setValidationTdc] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleValidation = (year) => {
    let currentTime = new Date();
    let currentYear = currentTime.getFullYear();
    console.log('cuuren year', currentYear);
    console.log('add year', parseInt(`20${year}`));

    if (validationTdc === false) {
      toast('Número de tarjeta invalido', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return false;
    }
    if (currentYear > parseInt(`20${year}`)) {
      toast('Año de tarjeta invalido', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return false;
    }
    return true;
  };

  const onSubmit = (data) => {
    if (handleValidation(data.year) === false) {
      return;
    }

    const request = {
      data: {
        object_id: createBooking.item_id.toString(),
        pay_uuid: payuuid,
        init_uuid: inituuid,
        user_last_name: user.apellido,
        cvc: data.cvc,
        is_cvc_required: true,
        credit_card_data_core: {
          year: data.year,
          card_number: data.tdc.split('-').join(''),
          card_holder: data.card_holder,
          month: data.month,
        },
        user_first_name: user.name,
      },
    };

    console.log('request', request);

    dispatch(paymentRatehawkTDC(request));
  };

  return (
    <div className="cardCreditCard ">
      <div className="cardCreditCard__header">
        <h4>Tajeta de crédito</h4>
        <img src="../../../static/IMAGENES/Icon/SVG/tarjeta-de-credito-icon.svg" alt="TDC" />
      </div>
      <div className="row my-3">
        <div className="col-12">
          <ShowCreditCards creditCards={hotelSelected?.payment_methods} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <InputTDC register={register} errors={errors['tdc']?.message} setValidationTdc={setValidationTdc} />
        </div>
        <div className="col-md-6">
          <div class="paymentProcess__input mb-3">
            <span>Titular de la tarjeta</span>
            <input name="headLineName" type="text" placeholder="Ej: Juan" {...register('card_holder')} />
            <p className="mb-0">{errors['card_holder']?.message}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <div class="paymentProcess__input  mb-3">
                <span>Mes</span>
                <input name="headLineName" maxLength={2} type="text" placeholder="Ej: 01" {...register('month')} />
                <p className="mb-0">{errors['month']?.message}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div class="paymentProcess__input  mb-3">
                <span>Año</span>
                <input name="headLineName" maxLength={2} type="text" placeholder="Ej: 22" {...register('year')} />
                <p className="mb-0">{errors['year']?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="paymentProcess__input  mb-3">
            <span>Cód. seguridad</span>
            <input name="headLineName" type="text" placeholder="Ej: Juan" {...register('cvc')} maxLength={3} />
            <p className="mb-0">{errors['cvc']?.message}</p>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between align-items-end mt-3">
        <button className="btn__gold" onClick={() => setStepProcces(1)}>
          Atras
        </button>
        <button className="btn__gold" onClick={handleSubmit(onSubmit)}>
          <img src="../../../static/IMAGENES/Icon/SVG/pagar-icon.svg" alt="Pagar" />
          Pagar
        </button>
      </div>
    </div>
  );
};
