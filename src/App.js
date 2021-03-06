import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { AppRouter } from './routers/AppRouter'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
            <ToastContainer/>
        </Provider>
    )
}