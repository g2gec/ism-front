import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateVendor.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { expresiones } from '../../../../helpers/regex';
import axios from '../../../../axios';
import { uiShowBarLoading } from '../../../../actions/ui';
import { toast, Slide } from 'react-toastify';

const schema = yup.object().shape({
  type__vendor: yup.string().required('Campo requerido'),

  address: yup.string().required('Campo requerido'),

  document: yup.string().required('Campo requerido').matches(expresiones.alpha_number, 'Solo números y letras'),

  phone: yup.string().required('Campo requerido').matches(expresiones.numbers, 'Solo números').matches(expresiones.phone, 'Número inválidos'),

  advisor__permit: yup.string().required('Campo requerido'),

  name: yup.string().required('Campo requerido').matches(expresiones.name, 'Solo letras'),

  surname: yup.string().required('Campo requerido').matches(expresiones.name, 'Solo letras'),

  email: yup.string().required('Campo requerido').email('Correo electrónico inválido'),

  discount: yup.string().required('Campo requerido').matches(expresiones.numbers, 'Solo números').matches(expresiones.up_to_100, 'Debe ser menor a 100%'),
});

export const CreateVendor = ({ vendorSelected, setPanelStep }) => {
  const dispatch = useDispatch();
  const { barLoading } = useSelector((state) => state.ui);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (vendorSelected !== null) {
      setValue('type__vendor', vendorSelected.type_seller);
      setValue('address', vendorSelected.address);
      setValue('document', vendorSelected.document);
      setValue('phone', vendorSelected.phone);
      setValue('advisor__permit', vendorSelected.advisor_permit);
      setValue('name', vendorSelected.name);
      setValue('surname', vendorSelected.surname);
      setValue('email', vendorSelected.email);
      setValue('discount', vendorSelected.discount);
    }
  }, [vendorSelected]);

  // const [imagePreview, setImagePreview] = useState(null)
  // const [image, setImage] = useState(null)

  // const handleImageUpload = (e) => {
  //   setImagePreview(URL.createObjectURL(e.target.files[0]))
  //   setImage(e.target.files[0])
  // }

  const handleRegisterVendors = async (data) => {
    const request = {
      type_seller: data.type__vendor,
      name: data.name,
      surname: data.surname,
      address: data.address,
      document: data.document,
      phone: data.phone,
      email: data.email,
      discount: data.discount,
      advisor_permit: data.advisor__permit,
    };

    if (vendorSelected) {
      request.seller_id = vendorSelected.id;
    }

    let url = vendorSelected ? 'admin/sellers/update' : 'admin/sellers/register';

    dispatch(uiShowBarLoading(true));

    let res = await axios.post(url, request);

    dispatch(uiShowBarLoading(false));

    let message = vendorSelected ? 'Se ha actualizado el usuario' : 'Se ha registrado un nuevo usuario';

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

    setPanelStep('list');
  };

  const onSubmit = (data) => {
    handleRegisterVendors(data);

    reset();
  };

  const handleDelete = async () => {
    dispatch(uiShowBarLoading(true));
    let res = await axios(`admin/sellers/delete/${vendorSelected.id}`);
    dispatch(uiShowBarLoading(false));
    toast('Vendor eliminado', {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });

    setPanelStep('list');
  };

  return (
    <div className="createVendor">
      <h5 className="admin__titlePanel">Nuevo vendedor</h5>
      <div className="row">
        <div className="col-md-6">
          <div className="admin__inputSelect mb-2">
            <p>Tipo de vendedor</p>
            <select name="type__vendor" {...register('type__vendor')}>
              <option value="">Seleccionar tipo de vendedor</option>
              <option value="1">Interno</option>
              <option value="2">Externo</option>
            </select>
            <p className="input__error">{errors['type__vendor']?.message}</p>
          </div>
          <div className="admin__inputText">
            <p>Domicilio</p>
            <input type="text" placeholder="Ingresa domicilio" name="address" {...register('address')} />
            <p className="input__error">{errors['address']?.message}</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="admin__inputText">
                <p>Documento</p>
                <input type="text" placeholder="AV5673N" name="document" {...register('document')} />
                <p className="input__error">{errors['document']?.message}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="admin__inputText">
                <p>Telefono</p>
                <input type="text" placeholder="4248644310" name="phone" {...register('phone')} />
                <p className="input__error">{errors['phone']?.message}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="admin__inputSelect mb-2">
                <p>Habilitar permisos de asesor</p>
                <select name="advisor__permit" {...register('advisor__permit')}>
                  <option value="">Seleccionar permiso</option>
                  <option value="1">Si</option>
                  <option value="2">No</option>
                </select>
                <p className="input__error">{errors['advisor__permit']?.message}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="admin__inputText">
            <p>Nombre</p>
            <input type="text" placeholder="Ingrese los nombres" name="name" {...register('name')} />
            <p className="input__error">{errors['name']?.message}</p>
          </div>
          <div className="admin__inputText">
            <p>Apellido</p>
            <input type="text" placeholder="Ingrese los apeliidos" name="surname" {...register('surname')} />
            <p className="input__error">{errors['surname']?.message}</p>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="admin__inputText">
                <p>Correo</p>
                <input type="email" placeholder="Ingrese correo electronico" name="email" {...register('email')} />
                <p className="input__error">{errors['email']?.message}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>$ dsto</p>
                <input type="text" placeholder="Ej: 10% dsto" name="discount" {...register('discount')} />
                <p className="input__error">{errors['discount']?.message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        {vendorSelected && (
          <button className="cartPage__deleteItems mr-3" onClick={handleDelete}>
            <img src="../../../static/IMAGENES/Icon/SVG/borrar-icon.svg" className="img-fluid" />
            Eliminar
          </button>
        )}
        {!barLoading && (
          <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
            <img src="../../../static/IMAGENES/Icon/SVG/agregar-persona-icon.svg" className="img-fluid" />
            {vendorSelected ? 'Editar' : 'Agregar'}
          </button>
        )}
      </div>
    </div>
  );
};
