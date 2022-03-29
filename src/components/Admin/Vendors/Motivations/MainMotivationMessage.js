import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, Slide } from 'react-toastify';
import axios from '../../../../axios';
import { uiShowBarLoading } from '../../../../actions/ui';

const schema = yup.object().shape({
  file: yup.mixed().required('A file is required'),

  message: yup.string().required('Campo requerido'),
});
export const MainMotivationMessage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

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
  const [existMessage, setExistMessage] = useState(false);
  const [messageActive, setMessageActive] = useState(null);

  //   useEffect(() => {
  //     if (promotionSelected !== null) {
  //       // setDateStart(promotionSelected.from)
  //       // setDateEnd(promotionSelected.to)
  //       setValue('message', promotionSelected.title);
  //       setImagePreview(`${process.env.REACT_APP_BASE}/uploads/promotions/${promotionSelected.id}/${promotionSelected.url_file}`);
  //     }
  //   }, [promotionSelected]);

  const handleGetMessage = async () => {
    const request = {
      user_id: user.id,
    };
    let res = await axios.post('sellers/messages/show', request);
    if (res.data.msg === 'No existe registro asociado') {
      return;
    }
    dispatch(uiShowBarLoading(false));
    setMessageActive(res.data.data);
    setValue('message', res.data.data.message);
    setImagePreview(`${process.env.REACT_APP_BASE}/uploads/messages-motivationals/${res.data.data.id}/${res.data.data.url_image}`);
    setExistMessage(true);
  };

  useEffect(() => {
    handleGetMessage();
  }, []);

  const handleImageUpload = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
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

    const formData = new FormData();
    if (existMessage) {
      formData.append('id', messageActive.id);
    } else {
      formData.append('user_id', user.id);
    }
    formData.append('message', data.message);
    if (image) {
      formData.append('file', image);
    }

    const options = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    let url = existMessage ? 'sellers/messages/update' : 'sellers/messages/store';

    try {
      let res = await axios.post(url, formData, options);

      console.log('response add Message', res);

      dispatch(uiShowBarLoading(false));

      toast('Mensaje motivacional agregado', {
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
    } catch (error) {
      console.log(error);
      dispatch(uiShowBarLoading(false));
    }
  };

  const onSubmit = (data) => {
    registerPromotion(data);
  };

  const updatedStatusMsg = async () => {
    let request = {
      id: messageActive.id,
    };
    dispatch(uiShowBarLoading(true));
    let res = await axios.post('sellers/messages/status', request);
    handleGetMessage();
    console.log('updated status', res);
  };

  return (
    <div className="createPromotion">
      <h5 className="admin__titlePanel">Mensaje Motivacional</h5>
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
                <p>Mensaje</p>
                <input type="text" placeholder="Ingrese el mensaje" name="message" {...register('message')} />
                <p className="input__error">{errors['message']?.message}</p>
              </div>
            </div>
          </div>
        </div>
        {existMessage && (
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-10">
                <div className="admin__inputText">
                  <p>Activar/ Desactivar</p>
                  <button className="btn__gold" onClick={() => updatedStatusMsg()}>
                    {messageActive.status === '1' ? 'Desactivar' : 'Activar'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-end mt-3 align-items-center">
        <button className="admin__panelBtn" onClick={handleSubmit(onSubmit)}>
          <img src="../../../static/IMAGENES/Icon/SVG/crear-icon.svg" className="img-fluid" />
          Añadir
        </button>
      </div>
    </div>
  );
};
