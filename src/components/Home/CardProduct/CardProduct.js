import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { handleModalProduct } from "../../../actions/ui";
import "./CardProduct.css";

export const CardProduct = () => {
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleViewProduct = () => {
    dispatch(handleModalProduct(true));
  };

  const handleBtnRegister = () => {
    history.push("/contactoCliente");
  };

  return (
    <div className="cardProduct">
      <div className="cardProduct__image w-50">
        <div
          className="cardProduct__img d-flex justify-content-center align-items-end w-100 mb-2"
          style={{
            backgroundImage: `url(../../../static/IMAGENES/img/quito.jpg)`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {!user && (
          <button className="btn__gold" onClick={handleBtnRegister}>
            Regístrate
          </button>
        )}
      </div>
      <div className="cardProduct__info">
        <div
          className={
            user ? "cardProduct__infoHeaderActive" : "cardProduct__infoHeader"
          }
        >
          <h4>Quito</h4>
          <p>3D/2N</p>
        </div>
        <div
          className={
            user
              ? "cardProduct__infoBodyActive-member"
              : "cardProduct__infoBody-member"
          }
        >
          <h5>Precio afiliados</h5>
          <p>
            $150<span>(Desde)</span>
          </p>
        </div>
        {!user && <div className="cardProduct__infoBodyLine"></div>}
        {!user && (
          <div className="cardProduct__infoBody">
            <h5>Precio normal</h5>
            <p>
              $230<span>(Desde)</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
