import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../../actions/auth';
import './MenuAuth.css';
import { handleModalProfileAssociate } from '../../../actions/ui';

export const MenuAuth = () => {
  const history = useHistory();

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [showMenu, setshowMenu] = useState(false);

  const handleShowMenu = () => {
    setshowMenu(!showMenu);
  };

  const goViewContact = (route) => {
    history.push(`${route}`);
    setshowMenu(false);
  };

  const handleLogout = () => {
    dispatch(authLogout());
  };
  const handleShowModalProfile = () => {
    dispatch(handleModalProfileAssociate(true));
    setshowMenu(!showMenu);
  };

  return (
    <div className="menuAuth">
      <div className="menuAuth__bars">
        <i class="fas fa-bars" onClick={handleShowMenu}></i>
      </div>
      {user && (
        <div className="menuAuth__avatar">
          <img
            className="img-fluid"
            src={user.avatar !== '' ? `${process.env.REACT_APP_BASE}/uploads/customers/${user.id}/${user.avatar}` : 'assets/images/avatar_edit.png'}
            alt=""
          />
        </div>
      )}
      {showMenu && (
        <div className="menuAuth__menu">
          <ul>
            <li onClick={() => goViewContact('/')}>Inicio</li>
            <li onClick={handleShowModalProfile}>Perfil</li>
            <li onClick={() => goViewContact('/user/chat')}>Chat</li>
            <li onClick={() => goViewContact('/user/promociones')}>Promociones</li>
            <li onClick={() => goViewContact('/user/carrito')}>Carrito</li>
            <li onClick={() => goViewContact('/user/tus-viajes')}>Historial de viajes</li>
            <li onClick={() => goViewContact('promociones')}>Asesor personal</li>
            <li onClick={() => goViewContact('/ayuda')}>Ayuda</li>
            <li onClick={handleLogout}>Cerrar sesión</li>
          </ul>
        </div>
      )}
    </div>
  );
};
