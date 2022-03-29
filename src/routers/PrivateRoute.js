import React, { useEffect } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdminRouter } from './AdminRouter';
import { Cart } from '../pages/Logged/Cart/Cart';
import { Chat } from '../pages/Logged/Chat/Chat';
import { PaymentProces } from '../pages/Logged/PaymentProces/PaymentProces';
import { Promotions } from '../pages/Logged/Promotions/Promotions';
import { SearchEngine } from '../pages/Logged/SearchEngine/SearchEngine';
import { TravelsHistory } from '../pages/Logged/TravelsHistory/TravelsHistory';
import { handleGetUsersOnline } from '../actions/chat';
import { HotelDetails } from '../components/Modals/Products/HotelDetails/HotelDetails';

export const PrivateRoute = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const currentUser = JSON.parse(localStorage.getItem('user'));

  if (!currentUser || currentUser.tier !== 'ASOCIADO') {
    history.replace('/');
  }

  return (
    <>
      <Switch>
        <Route path="/user/busqueda" component={SearchEngine} />
        <Route path="/user/promociones" component={Promotions} />
        <Route path="/user/carrito" component={Cart} />
        <Route path="/user/pago" component={PaymentProces} />
        <Route path="/user/chat" component={Chat} />
        <Route path="/user/tus-viajes" component={TravelsHistory} />
      </Switch>
      <HotelDetails />
    </>
  );
};
