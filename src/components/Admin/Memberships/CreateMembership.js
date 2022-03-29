import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './CreateMembership.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { expresiones } from '../../../helpers/regex';
import { toast, Slide } from 'react-toastify';
import axios from '../../../axios';
import { uiShowBarLoading } from '../../../actions/ui';
import { InputAdminCurrency } from '../../UI/Inputs/InputAdminCurrency';

const schema = yup.object().shape({
  file: yup.mixed().required('A file is required'),

  name: yup.string().required('Campo requerido'),

  expiration: yup.string().required('Campo requerido'),

  price: yup.string().required('Campo requerido'),
});

export const CreateMembership = ({ handleVieMemberships, selectedMembership = null }) => {
  const dispatch = useDispatch();

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
    if (selectedMembership !== null) {
      console.log('selectedMembership.price', selectedMembership.price);
      setValue('name', selectedMembership.name);
      setValue('expiration', selectedMembership.expiration_date);
      setValue('price', selectedMembership.price);
      setValue('motor', selectedMembership.motor);
      setValue('discount', selectedMembership.discount);
      setImagePreview(`${process.env.REACT_APP_BASE}/uploads/memberships/${selectedMembership.id}/${selectedMembership.file}`);
    }
  }, [selectedMembership]);

  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    // console.log('imageRef', e.target.files[0])
  };

  const handleValidations = () => {
    if (imagePreview === null) {
      alert('agregar imagen de membresia');
      return false;
    }
    return true;
  };

  const updatedMembership = async (data) => {
    dispatch(uiShowBarLoading(true));
    const formData = new FormData();
    formData.append('membership_id', selectedMembership.id);
    formData.append('name', data.name);
    formData.append('expiration_date', data.expiration);
    formData.append('motor', 'test');
    formData.append('price', data.price);
    formData.append('discount', '100000');
    formData.append('file', image);

    const options = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    try {
      let res = await axios.post(`/membership/update`, formData, options);

      dispatch(uiShowBarLoading(false));

      toast('Membresía actualizada con éxito', {
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
      handleVieMemberships('list');
    } catch (error) {
      console.log(error);
      dispatch(uiShowBarLoading(false));
    }
  };

  const onSubmit = async (data) => {
    if (!selectedMembership) {
      if (handleValidations() === false) {
        return false;
      }

      dispatch(uiShowBarLoading(true));

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('expiration_date', data.expiration);
      formData.append('motor', 'test');
      formData.append('price', data.price);
      formData.append('discount', '100000');
      formData.append('file', image);

      const options = {
        headers: { 'Content-Type': 'multipart/form-data' },
      };

      try {
        let res = await axios.post(`/membership/register`, formData, options);

        dispatch(uiShowBarLoading(false));

        toast('Membresía creada con éxito', {
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
        handleVieMemberships('list');
      } catch (error) {
        console.log(error);
        dispatch(uiShowBarLoading(false));
      }
    } else {
      updatedMembership(data);
    }
  };

  const deleteMembership = async () => {
    try {
      let res = await axios.get(`/membership/delete/${selectedMembership.id}`);

      dispatch(uiShowBarLoading(false));

      toast('Membresía eliminada con éxito', {
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
      handleVieMemberships('list');
    } catch (error) {
      console.log(error);
      dispatch(uiShowBarLoading(false));
    }
  };

  return (
    <div className="membershipsCreate">
      <h5 className="admin__titlePanel">Nueva membresía</h5>
      <div className="row">
        <div className="col-md-6">
          <div className="admin__artPanel">
            <p>Diseño tarjeta</p>
            <label for="imageMembership">
              {imagePreview ? (
                <img src={imagePreview} className="img-fluid" />
              ) : (
                <div for="imageMembership text-center" className="imageMembership__reference d-flex flex-column align-items-center justify-content-center">
                  <p className="">Medidas</p>
                  <p className="">720px X 480px</p>
                </div>
              )}
            </label>
            <p className="input__error">{errors['file']?.message}</p>
            <input type="file" {...register('file')} name="file" className="d-none" id="imageMembership" onChange={(e) => handleImageUpload(e)} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="admin__inputText">
            <p>Nombre membresía</p>
            <input type="text" placeholder="Ingrese numero de tarjeta" name="name" {...register('name')} />
            <p className="input__error">{errors['name']?.message}</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="admin__inputText">
                <p>Vencimiento</p>
                <input type="date" placeholder="MM/AA" name="expiration" {...register('expiration')} />
                <p className="input__error">{errors['expiration']?.message}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="admin__inputText">
                <InputAdminCurrency
                  label="Precio"
                  type="text"
                  placeholder="1200 usd"
                  setValue={setValue}
                  register={register}
                  errors={errors['price']?.message}
                  name="price"
                  value={selectedMembership?.price}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-8">
              <div className="admin__inputSelect">
                <p>Añadir motores</p>
                <select>
                  <option value="Seleccionar motor de busqueda">Seleccionar motor de busqueda</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="admin__inputText">
                <p>% dsto</p>
                <input type="text" placeholder="Ej: 10% dsto" />
              </div>
            </div>
            <div className="col-8">
              <div className="admin__inputSelect">
                <p>Añadir motores</p>
                <select>
                  <option value="Seleccionar motor de busqueda">Seleccionar motor de busqueda</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="admin__inputText">
                <p>% dsto</p>
                <input type="text" placeholder="Ej: 10% dsto" />
              </div>
            </div>
            <div className="col-8">
              <div className="admin__inputSelect">
                <p>Añadir motores</p>
                <select>
                  <option value="Seleccionar motor de busqueda">Seleccionar motor de busqueda</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="admin__inputText">
                <p>% dsto</p>
                <input type="text" placeholder="Ej: 10% dsto" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end mt-3">
            {!selectedMembership ? (
              <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
                <img src="../../../static/IMAGENES/Icon/SVG/crear-icon.svg" className="img-fluid" />
                Crear
              </button>
            ) : (
              <>
                <button className="cartPage__deleteItems mr-3" onClick={deleteMembership}>
                  <img src="../../../static/IMAGENES/Icon/SVG/borrar-icon.svg" className="img-fluid" />
                  Eliminar
                </button>
                <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
                  <img src="../../../static/IMAGENES/Icon/SVG/crear-icon.svg" className="img-fluid" />
                  Editar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
