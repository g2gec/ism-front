import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, handleGetUsersOnline } from "../actions/chat";
import { VendorMenu } from "../components/Vendor/VendorMenu";
import { Chat } from "../pages/Vendor/Chat/Chat";
import { Clients } from "../pages/Vendor/Clientes/Clients";
import { Profile } from "../pages/Vendor/Profile/Profile";
import { Promotions } from "../pages/Vendor/Promotions/Promotions";
import { Quote } from "../pages/Vendor/Quote/Quote";
import { VendorReport } from "../pages/Vendor/VendorsReport/VendorReport";

export const VendorsRouter = ({ socket }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = JSON.parse(localStorage.getItem("user"));

  if (!currentUser || currentUser.tier !== "VENDEDOR") {
    history.replace("/");
  }

  return (
    <div className="vendorRoutes py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <VendorMenu />
          </div>
          <div className="col-md-9">
            <Switch>
              <Route path="/vendedor/perfil" component={Profile} />
              <Route path="/vendedor/cotizacion" component={Quote} />
              <Route path="/vendedor/promociones" component={Promotions} />
              {/* <Route
                path="/vendedor/chat"
                component={() => <Chat socket={socket} />}
              /> */}
              <Route path="/vendedor/chat" component={Chat} />
              <Route path="/vendedor/reportes" component={VendorReport} />
              <Route path="/vendedor/clientes" component={Clients} />
              {/* <Route path="/vendedor/provedores" component={Providers} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
