import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, handleGetUsersOnline } from "../actions/chat";
import { AdminMenu } from "../components/Admin/AdminMenu/AdminMenu";
import { Chat } from "../pages/Admin/Chat/Chat";
import { Memberships } from "../pages/Admin/Memberships/Memberships";
import { Profile } from "../pages/Admin/Profile/Profile";
import { Promotions } from "../pages/Admin/Promotions/Promotions";
import { Providers } from "../pages/Admin/Providers/Providers";
import { Reports } from "../pages/Admin/Reports/Reports";
import { Vendors } from "../pages/Admin/Vendors/Vendors";

export const AdminRouter = ({ socket }) => {
  // const dispatch = useDispatch();
  // const { users } = useSelector((state) => state.chat);
  // const { user } = useSelector((state) => state.auth);
  const history = useHistory();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  if (!currentUser || currentUser.tier !== "ADMINISTRADOR") {
    history.replace("/");
  }

  return (
    <div className="adminRoutes py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <Switch>
              <Route path="/admin/perfil" component={Profile} />
              <Route path="/admin/membresias" component={Memberships} />
              <Route path="/admin/vendedores" component={Vendors} />
              <Route path="/admin/reportes" component={Reports} />
              <Route path="/admin/promociones" component={Promotions} />
              <Route path="/admin/provedores" component={Providers} />
              <Route path="/admin/chat" component={Chat} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
