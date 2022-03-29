import React from 'react'
import { NavLink } from 'react-router-dom'
import './VendorMenu.css'

export const VendorMenu = () => {
    return (
      <div className="vendorMenu px-4">
        <ul>
          <li>
            <NavLink to="/vendedor/perfil" activeClassName="vendorMenu__linkActive">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/vendedor/cotizacion" activeClassName="vendorMenu__linkActive">Cotizador</NavLink>
          </li>
          <li>
            <NavLink to="/vendedor/promociones" activeClassName="vendorMenu__linkActive">Promociones</NavLink>
          </li>
          <li>
            <NavLink to="/vendedor/chat" activeClassName="vendorMenu__linkActive">Chat</NavLink>
          </li>
          <li>
            <NavLink to="/vendedor/clientes" activeClassName="vendorMenu__linkActive">Clientes</NavLink>
          </li>
          <li>
            <NavLink to="/vendedor/reportes" activeClassName="vendorMenu__linkActive">Reporte de ventas</NavLink>
          </li>
          {/* <li>
            <NavLink to="/vendedor">Cerrar sesión</NavLink>
          </li> */}
        </ul>
      </div>
    );
}
