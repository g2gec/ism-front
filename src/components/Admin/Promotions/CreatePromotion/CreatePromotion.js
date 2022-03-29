import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import './CreatePromocion.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { expresiones } from '../../../../helpers/regex';
import { toast, Slide } from 'react-toastify';
import axios from '../../../../axios';
import { uiShowBarLoading } from '../../../../actions/ui';
import { InputAdminCurrency } from '../../../UI/Inputs/InputAdminCurrency';

const schema = yup.object().shape({
  file: yup.mixed().required('A file is required'),

  title: yup.string().required('Campo requerido').matches(expresiones.name, 'Solo letras'),

  from: yup.string().required('Campo requerido'),

  until: yup.string().required('Campo requerido'),

  total_value: yup.string().required('Campo requerido'),

  description: yup.string().required('Campo requerido'),

  termns: yup.string().required('Campo requerido'),

  valid_for: yup.string().required('Campo requerido'),

  service: yup.string().required('Campo requerido'),

  discount: yup.string().required('Campo requerido').matches(expresiones.up_to_100, 'Debe ser menor a 100%'),

  fixed_value: yup.string().required('Campo requerido'),
});

const now = moment();

export const CreatePromotion = ({ handlerView, promotionSelected }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [memberships, setMemberships] = useState([]);

  const getMemberships = async () => {
    let res = await axios.get('memberships');
    setMemberships(res.data);
    if (promotionSelected) {
      console.log('promotionSelected', promotionSelected);
      setValue('valid_for', promotionSelected.valid_for);
    }
  };

  useEffect(() => {
    getMemberships();
    if (promotionSelected !== null) {
      // setDateStart(promotionSelected.from)
      // setDateEnd(promotionSelected.to)
      setValue('title', promotionSelected.title);
      setValue('from', promotionSelected.from);
      setValue('until', promotionSelected.to);
      setValue('total_value', promotionSelected.total_cost);
      setValue('description', promotionSelected.description);
      setValue('termns', promotionSelected.term_conditions);
      setValue('valid_for', promotionSelected.valid_for);
      setValue('service', promotionSelected.service_promotions[0].service);
      setValue('discount', promotionSelected.service_promotions[0].service_discount);
      setValue('fixed_value', promotionSelected.service_promotions[0].fixed_value);
      setImagePreview(`${process.env.REACT_APP_BASE}/uploads/promotions/${promotionSelected.id}/${promotionSelected.url_file}`);
    }
  }, [promotionSelected]);

  const handleImageUpload = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    if (e !== null) {
      setValue('from', e);
      clearErrors('from');
    } else {
      setValue('from', '');
    }
  };
  const handleEndDateChange = (e) => {
    setDateEnd(e);
    if (e !== null) {
      clearErrors('until');
      setValue('until', e);
    } else {
      setValue('until', '');
    }
  };

  const handleValidations = () => {
    if (imagePreview === null) {
      return false;
    }
    return true;
  };

  const registerPromotion = async (data) => {
    if (handleValidations() === false) {
      return false;
    }

    dispatch(uiShowBarLoading(true));

    let services = {
      service: data.service,
      discount: data.discount,
      fixed_value: data.fixed_value,
    };

    const formData = new FormData();

    if (promotionSelected) {
      formData.append('promotion_id', promotionSelected.id);
    }

    formData.append('title', data.title);
    formData.append('from', moment(data.from).format('YYYY/MM/DD'));
    formData.append('to', moment(data.until).format('YYYY/MM/DD'));
    formData.append('description', data.description);
    formData.append('term_conditions', data.termns);
    formData.append('valid_for', data.valid_for);
    formData.append('total_cost', data.total_value);
    formData.append('services[]', JSON.stringify(services));
    if (image) {
      formData.append('file', image);
    }

    const options = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    const url = !promotionSelected ? 'admin/promotions/register' : 'admin/promotions/update';

    try {
      let res = await axios.post(url, formData, options);

      console.log('response create promotioin', res);

      dispatch(uiShowBarLoading(false));

      let message = promotionSelected ? 'Promocion actualizada con éxito' : 'Promocion creada con éxito';

      toast(message, {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      reset();
      handlerView('existent');
    } catch (error) {
      console.log(error);
      dispatch(uiShowBarLoading(false));
    }
  };

  const onSubmit = (data) => {
    registerPromotion(data);
  };

  const deletePromotion = async () => {
    dispatch(uiShowBarLoading(true));
    let res = await axios.get(`admin/promotions/delete/${promotionSelected.id}`);
    dispatch(uiShowBarLoading(false));
    console.log('delete promotion', res);
    toast('Promocion eliminada', {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
    handlerView('existent');
  };

  return (
    <div className="createPromotion">
      <h5 className="admin__titlePanel">Nueva promoción</h5>
      <div className="row">
        <div className="col-md-6">
          <div className="admin__artPanel">
            <p>Arte</p>
            <label for="imagePromotion">
              {imagePreview ? (
                <img src={imagePreview} className="img-fluid" />
              ) : (
                <div for="imageMembership text-center" className="imageMembership__reference d-flex flex-column align-items-center justify-content-center">
                  <p className="">Medidas</p>
                  <p className="">1024px X 416px</p>
                </div>
              )}
            </label>
            <input type="file" {...register('file')} name="file" className="d-none" id="imagePromotion" onChange={(e) => handleImageUpload(e)} />
            <p className="input__error">{errors['file']?.message}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-10">
              <div className="admin__inputText">
                <p>Titulo</p>
                <input type="text" placeholder="Ingrese el titulo" name="title" {...register('title')} />
                <p className="input__error">{errors['title']?.message}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="admin__inputText">
                    <p>Desde</p>
                    <DateTimePicker
                      onChange={handleStartDateChange}
                      value={dateStart}
                      minDate={now.toDate()}
                      calendarIcon={false}
                      disableClock={true}
                      showTimeSelect
                      format="dd/MM/yyyy"
                      className="admin__inputDate"
                      dayPlaceholder="dd"
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                    />
                    {/* <input
                        type="date"
                        min={Date.now()}
                        placeholder="Fecha"
                        name="from"
                        {...register('from')}
                      /> */}
                    <p className="input__error">{errors['from']?.message}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="admin__inputText">
                    <p>Hasta</p>
                    <DateTimePicker
                      onChange={handleEndDateChange}
                      value={dateEnd}
                      minDate={dateStart}
                      calendarIcon={false}
                      disableClock={true}
                      showTimeSelect
                      format="dd/MM/yyyy"
                      className="admin__inputDate"
                      dayPlaceholder="dd"
                      monthPlaceholder="mm"
                      yearPlaceholder="yyyy"
                    />
                    {/* <input
                        type="date"
                        placeholder="Fecha"
                        name="until"
                        {...register('until')}
                      /> */}
                    <p className="input__error">{errors['until']?.message}</p>
                  </div>
                </div>
              </div>
              <div className="admin__inputText">
                <InputAdminCurrency
                  label="Valor total"
                  type="text"
                  placeholder="Calculo"
                  setValue={setValue}
                  register={register}
                  errors={errors['total_value']?.message}
                  name="total_value"
                  value={promotionSelected?.total_cost}
                />
                {/* <p>Valor total</p>
                <input type="text" placeholder="Calculo" name="total_value" {...register('total_value')} />
                <p className="input__error">{errors['total_value']?.message}</p> */}
              </div>
              <div className="row">
                <div className="col-6">
                  <span>Añadir servicios</span>
                </div>
                <div className="col-3">
                  <span>% dsto</span>
                </div>
                <div className="col-3">
                  <span>Valor fijo</span>
                </div>

                <div className="col-6">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Hotel" name="service" {...register('service')} />
                    <p className="input__error">{errors['service']?.message}</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Ej: 10%" name="discount" {...register('discount')} />
                    <p className="input__error">{errors['discount']?.message}</p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Ej: USD 250" name="fixed_value" {...register('fixed_value')} />
                    <p className="input__error">{errors['fixed_value']?.message}</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Traslados" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Ej: 10%" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Ej: USD 250" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Actividad" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Ej: 10%" />
                  </div>
                </div>
                <div className="col-3">
                  <div className="admin__inputText">
                    <input type="text" placeholder="Ej: USD 250" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="admin__inputText">
            <p>Descripción</p>
            <input
              type="text"
              placeholder="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
              name="description"
              {...register('description')}
            />
            <p className="input__error">{errors['description']?.message}</p>
          </div>
          <div className="admin__inputText">
            <p>Terminos y condiciones</p>
            <input
              type="text"
              placeholder="Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
              name="termns"
              {...register('termns')}
            />
            <p className="input__error">{errors['termns']?.message}</p>
          </div>
          <div className="admin__inputSelect">
            <p>Valida para</p>
            <select name="valid_for" {...register('valid_for')}>
              <option value="">Seleccionar membresía</option>
              {memberships.map((e) => (
                <option value={e.id}>{e.name}</option>
              ))}
            </select>
            <p className="input__error">{errors['valid_for']?.message}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3 align-items-center">
        {promotionSelected && (
          <button className="cartPage__deleteItems mr-3" onClick={deletePromotion}>
            <img src="../../../static/IMAGENES/Icon/SVG/borrar-icon.svg" className="img-fluid" />
            Eliminar
          </button>
        )}
        <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
          <img src="../../../static/IMAGENES/Icon/SVG/crear-icon.svg" className="img-fluid" />
          {!promotionSelected ? 'Crear' : 'Editar'}
        </button>
      </div>
    </div>
  );
};
