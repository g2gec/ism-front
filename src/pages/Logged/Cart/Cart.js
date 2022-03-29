import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import moment from 'moment';
import 'moment/locale/es';
import { toast, Slide } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';

import { CartProduct } from '../../../components/Cart/CartProduct/CartProduct';
import './Cart.css';
import { clearCar } from '../../../actions/car';

export const Cart = () => {
  moment.locale('es');

  const { products } = useSelector((state) => state.car);

  const dispatch = useDispatch();

  const history = useHistory();

  const [date, setDate] = useState(moment(new Date()).format('LL'));
  const [totalCar, setTotalCar] = useState(0);

  const handleClearCar = () => {
    dispatch(clearCar());
    toast('Carrito de compras vaciado', {
      position: 'bottom-center',
      autoClose: 2500,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
    history.push(`/`);
  };

  useEffect(() => {
    setTotalCar(handleCarAmount());
  }, [products]);

  const handleCarAmount = () => {
    let totalAmount = products.reduce((sum, value) => parseFloat(sum) + parseFloat(value.rate.net), 0);
    return totalAmount;
  };

  const handleViewCheckout = () => {
    history.push(`/user/pago`);
  };

  return (
    <div className="cartPage py-4">
      <div className="container">
        <div className="cartPage__header">
          <h2>Carrito</h2>
        </div>
        <div className="cartPage__content">
          <div className="cartPage__items">
            <div className="cartPage__headerBtns">
              <div></div>
              <div className="d-flex justify-content-center">
                <button className="cartPage__deleteItems d-none d-md-flex" onClick={handleClearCar}>
                  <img src="../../../static/IMAGENES/Icon/SVG/borrar-icon.svg" alt="Vaciar" />
                  Vaciar carrito
                </button>
              </div>
              <div className="cartPage__totalCart">
                <p className="cartPage__totalCartDate">{date}</p>
                <p className="cartPage__totalCartItems">N° items seleccionados: {products.length}</p>
                <p className="cartPage__totalCartTotal">
                  TOTAL A PAGAR <span>USD {totalCar}</span>{' '}
                </p>
              </div>
            </div>
            <div className="cartPage__headerBtns mt-3 justify-content-end">
              <button onClick={handleViewCheckout} className="btn__gold">
                <img src="../../../static/IMAGENES/Icon/SVG/pagar-icon.svg" alt="Pagar" />
                Pagar
              </button>
              <button className="cartPage__deleteItems d-md-none" onClick={handleClearCar}>
                <img src="../../../static/IMAGENES/Icon/SVG/borrar-icon.svg" alt="Vaciar" />
                Vaciar carrito
              </button>
            </div>
            {products.map((e, index) => (
              <CartProduct key={index} data={e} index={index + 1} image={'../../../static/IMAGENES/bogota.jpg'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
