import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiShowBarLoading } from "../../../actions/ui";
// import axios from '../../../axios'
import axios from "axios";
import { toast, Slide } from "react-toastify";

import "./ProfileForm.css";
import { getUserLogin } from "../../../actions/auth";

export const ProfileForm = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const imageRef = useRef(null);

  const handleAvatarUpload = (e) => {
    setImagePreview(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    console.log("imageRef", e.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (user) {
      setFormValues({
        name: user.name,
        surname: user.apellido,
        phone: user.phone,
        email: user.email,
      });
    }
  }, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    dispatch(uiShowBarLoading(true));

    const formData = new FormData();
    formData.append("customer_id", user.id);
    formData.append("first_name", formValues.name);
    formData.append("last_name", formValues.surname);
    formData.append("phone", formValues.phone);
    formData.append("email", formValues.email);
    formData.append("image", image);

    const options = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    let endpoint;

    if (user.tier === "ASOCIADO") {
      endpoint = "/auth/edit-customer";
    } else {
      endpoint = "/auth/edit-provider";
    }

    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/edit-customer`,
        formData,
        options
      );
      dispatch(uiShowBarLoading(false));
      const { data } = res.data;
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(getUserLogin(data));
      console.log("contact", data);

      toast("Información actualizada", {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } catch (e) {
      dispatch(uiShowBarLoading(false));
      console.log(`Axios request failed: ${e}`);
    }

    console.log("formData", formData);
  };

  return (
    <div className="profielFormAdmin">
      <label className="profielFormAdmin__img" for="imageProfileVendor">
        {!imagePreview && user ? (
          <img
            src={
              user.avatar
                ? `${process.env.REACT_APP_BASE}/uploads/customers/${user.id}/${user.avatar}`
                : `${process.env.REACT_APP_BASE}/images/avatar_edit.png`
            }
            className="img-fluid"
          />
        ) : (
          <img src={imagePreview} className="img-fluid" />
        )}
      </label>
      <input
        type="file"
        className="d-none"
        id="imageProfileVendor"
        onChange={(e) => handleAvatarUpload(e)}
        ref={imageRef}
      />
      <form className="profielFormAdmin__form" onSubmit={handleForm}>
        <div className="profielFormAdmin__input">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu nombre"
            onChange={handleInputChange}
            value={formValues.name}
            required
          />
        </div>
        <div className="profielFormAdmin__input">
          <label>Apellido:</label>
          <input
            type="text"
            name="surname"
            placeholder="Ingresa tu apelllido"
            onChange={handleInputChange}
            value={formValues.surname}
            required
          />
        </div>
        <div className="profielFormAdmin__input">
          <label>Teléfono Celular:</label>
          <input
            type="text"
            name="phone"
            placeholder="Ingresa tu número de teléfono"
            onChange={handleInputChange}
            value={formValues.phone}
            required
          />
        </div>
        <div className="profielFormAdmin__input">
          <label>Correo:</label>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu correo"
            onChange={handleInputChange}
            value={formValues.email}
            required
          />
        </div>
        <div className="profielFormAdmin__btn d-flex justify-content-end">
          <button className="btn__gold">
            <img src="../../../static/IMAGENES/Icon/SVG/guardar.icon.svg" />
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
