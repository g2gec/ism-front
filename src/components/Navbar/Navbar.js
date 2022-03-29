import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { authLogout } from "../../actions/auth";
import { CarBtn } from "./CarBtn/CarBtn";
import { LoginContainer } from "./LoginContainer/LoginContainer";
import { MenuAuth } from "./MenuAuth/MenuAuth";
import "./Navbar.css";
import { SupportBtn } from "./SupportBtn/SupportBtn";
import { ProfileAssociated } from "../Modals/ProfileAssociated/ProfileAssociated";
import { ModalForgetPassword } from "../auth/ModalForgetPassword";
import { MessageBtn } from "./MessageBtn/MessageBtn";
import { getTypeUserForRoute } from "../../helpers/user";
import { handleNotifiesToChat } from "../../actions/chat";

export const Navbar = () => {
  const history = useHistory();
  const { user } = useSelector((state) => state.auth);
  const { notify } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  const [rol, setRol] = useState(null);

  useEffect(() => {
    if (user) {
      setRol(user.tier);
    } else {
      setRol(null);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(authLogout());
  };

  const handleBtnNotifyChat = (role) => {
    dispatch(dispatch(handleNotifiesToChat([])));
    history.push(getTypeUserForRoute(role));
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light d-md-none">
        <Link className="navbar__img d-flex" to="/">
          <img
            className="img-fluid"
            src="../../../static/IMAGENES/Logo/ism.png"
          />
        </Link>
        {user && notify.length > 0 && (
          <div className="navbar__btn mr-5">
            <div onClick={() => handleBtnNotifyChat(user.role)}>
              <MessageBtn />
            </div>
          </div>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {rol !== "ADMINISTRADOR" && rol !== "VENDEDOR" && (
              <li className="nav-item">
                <Link
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo02"
                  className="nav-link"
                  to="/comoFuncionamos"
                >
                  ¿Como funcionamos?
                </Link>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <LoginContainer className="nav-link" />
              </li>
            )}
            {user && rol === "ASOCIADO" && (
              <>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/user/chat"
                  >
                    Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/user/promociones"
                  >
                    Promociones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/user/carrito"
                  >
                    Carrito
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/user/tus-viajes"
                  >
                    Historial de viajes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/promociones"
                  >
                    Asesor personal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/ayuda"
                  >
                    Ayuda
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleLogout}
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/comoFuncionamos"
                  >
                    Cerrar sesión
                  </a>
                </li>
              </>
            )}

            {/* MENU ADMINISTRADOR */}
            {user && rol === "ADMINISTRADOR" && (
              <>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/admin/membresias"
                  >
                    Membresias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/admin/vendedores"
                  >
                    Vendedores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/admin/reportes"
                  >
                    Reportes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/admin/promociones"
                  >
                    Promociones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/admin/provedores"
                  >
                    Provedores
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/admin/chat"
                  >
                    Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleLogout}
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/comoFuncionamos"
                  >
                    Cerrar sesión
                  </a>
                </li>
              </>
            )}

            {/* MENU VENDEDOR */}

            {user && rol === "VENDEDOR" && (
              <>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/vendedor/perfil"
                  >
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/vendedor/cotizacion"
                  >
                    Cotizador
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/vendedor/promociones"
                  >
                    Promociones
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/vendedor/chat"
                  >
                    Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/vendedor/clientes"
                  >
                    Clientes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                    to="/vendedor/reportes"
                  >
                    Reporte de ventas
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    onClick={handleLogout}
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    className="nav-link"
                  >
                    Cerrar sesión
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <div className="navbarDeskopt d-none d-md-flex">
        <div className="navbar__container container">
          <div className="navbar__brand">
            <Link className="navbar__img d-flex" to="/">
              <img
                className="img-fluid"
                src="../../../static/IMAGENES/Logo/ism.png"
              />
            </Link>
            {user && (
              <p>
                {user.name} {user.apellido}
              </p>
            )}
          </div>
          <div className="navbar__btns">
            <div className="navbar__btn mr-5">
              {!user && <Link to="/comoFuncionamos">¿Como funcionamos?</Link>}
            </div>

            {!user && <LoginContainer />}
            {rol === "ASOCIADO" && (
              <div className="navbar__btn mr-3">
                <SupportBtn />
              </div>
            )}
            {rol === "ASOCIADO" && (
              <div className="navbar__btn mr-5">
                <Link to="/user/carrito">
                  <CarBtn />
                </Link>
              </div>
            )}
            {user && notify.length > 0 && (
              <div className="navbar__btn mr-5">
                <div onClick={() => handleBtnNotifyChat(user.role)}>
                  <MessageBtn />
                </div>
              </div>
            )}
            {rol === "ASOCIADO" && <MenuAuth />}
            {rol && rol !== "ASOCIADO" && (
              <div className="navbar__logout" onClick={handleLogout}>
                <img src="../../../static/IMAGENES/Icon/SVG/Cerrar-sesion-icon.svg" />
                <span>Cerrar sesion</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <ProfileAssociated />
      <ModalForgetPassword />
    </>
  );
};
