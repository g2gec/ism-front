import React from 'react'
import { NavLink } from "react-router-dom";
import "./AdminMenu.css";

export const AdminMenu = () => {
    return (
      <div className="adminMenu px-4">
        <ul>
          <li>
            <NavLink to="/admin/perfil" activeClassName="adminMenu__linkActive">Perfil</NavLink>
          </li>
          <li>
            <NavLink to="/admin/membresias" activeClassName="adminMenu__linkActive">Membresias</NavLink>
          </li>
          <li>
            <NavLink to="/admin/vendedores" activeClassName="adminMenu__linkActive">Vendedores</NavLink>
          </li>
          <li>
            <NavLink to="/admin/reportes" activeClassName="adminMenu__linkActive">Reportes</NavLink>
          </li>
          <li>
            <NavLink to="/admin/promociones" activeClassName="adminMenu__linkActive">Promociones</NavLink>
          </li>
          <li>
            <NavLink to="/admin/provedores" activeClassName="adminMenu__linkActive">Provedores</NavLink>
          </li>
          <li>
            <NavLink to="/admin/chat" activeClassName="adminMenu__linkActive">Chat</NavLink>
          </li>
        </ul>
      </div>
    );
}
