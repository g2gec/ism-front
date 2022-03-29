import React, { useState, useEffect } from 'react';
import { Table } from '../Table/Table';
import { CreateClient } from '../CreateClient/CreateClient';
import './MainClients.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../../../../axios';
import { toast, Slide } from 'react-toastify';
import { uiShowBarLoading } from '../../../../../actions/ui';
import { BtnExportClients } from '../BtnExportClients';

export const MainClients = () => {
  const dispatch = useDispatch();

  const [viewPanel, setviewPanel] = useState('main');
  const [clients, setClients] = useState([]);
  const [selecteClient, setSelecteClient] = useState(null);
  const [editClient, setEditClient] = useState(null);

  const [filtersValues, setFiltersValues] = useState({
    nro_membership: '',
    name: '',
    surname: '',
    document: '',
    seller_option: false,
  });

  const handleViews = (view) => {
    if (view === 'create') {
      setEditClient(null);
    }
    setviewPanel(view);
  };

  const getClients = async () => {
    dispatch(uiShowBarLoading(true));
    let res = await axios.get('admin/customers');
    const { data } = res;
    setClients(data);
    dispatch(uiShowBarLoading(false));
  };

  useEffect(() => {
    getClients();
  }, []);

  const handleValidation = () => {
    if (!selecteClient) {
      toast('Selecciona un cliente', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return false;
    }
    return true;
  };

  const deleteClient = () => {
    if (!handleValidation()) {
      return;
    }
    try {
      dispatch(uiShowBarLoading(true));
      let res = axios.get(`admin/customers/delete/${selecteClient}`);
      console.log(res);
      dispatch(uiShowBarLoading(false));
      getClients();
      toast('Cliente eliminado con éxito', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } catch (error) {
      console.log(error);
      dispatch(uiShowBarLoading(false));
    }
  };

  const suspendClient = () => {
    if (!handleValidation()) {
      return;
    }
    try {
      dispatch(uiShowBarLoading(true));
      let res = axios.get(`admin/customers/supend/${selecteClient}`);
      console.log('suspend', res);
      dispatch(uiShowBarLoading(false));
      getClients();
      toast('Cliente suspendido con éxito', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
    } catch (error) {
      console.log(error);
      dispatch(uiShowBarLoading(false));
    }
  };

  const getClient = async () => {
    if (!handleValidation()) {
      return;
    }

    let res = await axios.get(`admin/customers/details/${selecteClient}`);
    setEditClient(res.data);
    setviewPanel('create');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltersValues({ ...filtersValues, [name]: value });
  };

  const handleCheckboxtChange = (event) => {
    const { name } = event.target;
    setFiltersValues({ ...filtersValues, [name]: event.target.checked });
  };

  const handleFilters = async () => {
    let request = {
      membership_number: filtersValues.nro_membership,
      name: filtersValues.name,
      surname: filtersValues.surname,
      document: filtersValues.document,
      seller_option: filtersValues.seller_option ? 1 : 0,
    };

    if (!filtersValues.nro_membership && !filtersValues.name && !filtersValues.surname && !filtersValues.document && !filtersValues.seller_option) {
      getClients();
    } else {
      let res = await axios.post('admin/customers/filters', request);
      setClients(res.data);

      console.log('filters', res);
    }
  };

  return (
    <div className="mainClients">
      {viewPanel === 'main' && (
        <div className="mainClients__hedaer p-3">
          <div className="row">
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>N° membresía</p>
                <input type="text" placeholder="Ingrese numero de membresía" name="nro_membership" onChange={handleInputChange} value={filtersValues.nro_membership} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>Nombre</p>
                <input type="text" placeholder="Ingrese nombre" name="name" onChange={handleInputChange} value={filtersValues.name} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>Apellido</p>
                <input type="text" placeholder="Ingrese apellido" name="surname" onChange={handleInputChange} value={filtersValues.surname} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>Cedula / pasaporte</p>
                <input type="text" placeholder="Ingrese identificacion" name="document" onChange={handleInputChange} value={filtersValues.document} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="mainClients__btns">
                <button className="admin__btn admin__btnSearch" onClick={handleFilters}>
                  <img src="../../../static/IMAGENES/Icon/SVG/buscar-icon.svg" />
                  Buscar
                </button>
                <button className="admin__btn admin__btnDelete" onClick={deleteClient}>
                  <img src="../../../static/IMAGENES/Icon/SVG/borrar-icon.svg" />
                  Eliminar
                </button>
                <button className="admin__btn admin__btnSuspend" onClick={suspendClient}>
                  <img src="../../../static/IMAGENES/Icon/SVG/suspender-icon.svg" />
                  Suspender
                </button>
                <button className="admin__btn admin__btnEdit" onClick={getClient}>
                  <img src="../../../static/IMAGENES/Icon/SVG/editar-icon.svg" />
                  Modificar
                </button>
              </div>
            </div>
            <div className="col-md-8">
              <div class="form-group form-check">
                <input type="checkbox" name="seller_option" onChange={handleCheckboxtChange} class="form-check-input" id="seller_option" />
                <label class="form-check-label" for="seller_option">
                  Sin Vendedores
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="memberships__create mb-0 ">
        {viewPanel === 'main' && (
          <>
            <img onClick={() => handleViews('create')} src="../../../static/IMAGENES/Icon/SVG/agregar-icon.svg" />
            <span onClick={() => handleViews('create')}>Crear nuevo cliente</span>
          </>
        )}
        {viewPanel === 'create' && (
          <>
            <img className="ml-2 mr-1" onClick={() => handleViews('main')} src="../../../static/IMAGENES/Icon/SVG/atras-icon.svg" />
            <span onClick={() => handleViews('main')}>Regresar</span>
          </>
        )}
      </div>
      {viewPanel === 'main' && (
        <>
          <div className="p-3">
            <Table setSelecteClient={setSelecteClient} clients={clients} />
          </div>
          <BtnExportClients clients={clients} />
        </>
      )}
      {viewPanel === 'create' && <CreateClient setviewPanel={setviewPanel} editClient={editClient} getClients={getClients} />}
    </div>
  );
};
