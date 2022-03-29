import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Home } from '../pages/Home/Home';
import { ContactUs } from '../pages/ContactUs/ContactUs';
import { HowWeWork } from '../pages/HowWeWork/HowWeWork';
import { Help } from '../pages/Help/Help';
import { Contact } from '../pages/ContactUs/Contact';
import { RecoverPassoword } from '../pages/RecoverPassword/RecoverPassoword';
import { ConfirmRegister } from '../pages/ConfirmRegister/ConfirmRegister';

export const PublicRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/comoFuncionamos" component={HowWeWork} />
            <Route path="/contactoCliente" component={Contact} />
            <Route path="/contactoProveedor" component={ContactUs} />
            <Route path="/ayuda" component={Help} />
            <Route path="/actualizar-clave" component={RecoverPassoword} />
            <Route path="/confirmar-registro" component={ConfirmRegister} />
        </Switch>
    )
}

