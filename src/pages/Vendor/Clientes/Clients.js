import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiShowBarLoading } from '../../../actions/ui';
import { TableClients } from '../../../components/Vendor/Clientes/TableClients';
import axios from '../../../axios';
import { BtnExportClients } from './BtnExportClients';
export const Clients = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [clients, setClients] = useState([]);
  const [selecteClient, setSelecteClient] = useState(null);

  const [filtersValues, setFiltersValues] = useState({
    seller: user.seller_id,
    document: '',
    membership: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFiltersValues({ ...filtersValues, [name]: value });
  };

  const getClients = async () => {
    dispatch(uiShowBarLoading(true));
    let res = await axios.get(`admin/sellers/${user.seller_id}/list-customers`);
    const { data } = res;
    console.log(data);
    setClients(data);
    dispatch(uiShowBarLoading(false));
  };

  useEffect(() => {
    getClients();
  }, []);

  const handleFilters = async () => {
    let request = {
      seller: filtersValues.seller,
      document: filtersValues.document,
      membership: filtersValues.membership,
    };

    if (!filtersValues.document && !filtersValues.membership) {
      getClients();
    } else {
      let res = await axios.post('admin/sellers/filter-customers', request);
      setClients(res.data);

      console.log('filters', res);
    }
  };

  return (
    <div className="vendorReports">
      <div className="vendor__mainTitle">
        <h3>Clientes</h3>
      </div>
      <div className="vendor__mainPanel">
        <div className="vendor__panelHeader">
          <button className={'admin__btnHeaderActive'}>Mis ventas</button>
        </div>
        <div className="vendor__content p-4">
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="admin__inputText">
                <p>Buscar</p>
                <input type="text" placeholder="Buscar..." />
              </div>
            </div>
            {/* <div className="col-md-3">
                <div className="vendor__inputSelect mb-2">
                  <p>Filtrar</p>
                  <select>
                    <option value="Seleccionar motor de busqueda">
                      Seleccionar filtro
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="vendor__inputText">
                  <p>Documento</p>
                  <input
                    type="text"
                    placeholder="Ingrese identificacion"
                    name="document"
                    onChange={handleInputChange}
                    value={filtersValues.document}
                    />
                </div>
              </div>
              <div className="col-md-3">
                <div className="vendor__inputText">
                  <p>Nº Membresía</p>
                  <input
                    type="text"
                    placeholder="Ingrese identificacion"
                    name="membership"
                    onChange={handleInputChange}
                    value={filtersValues.membership}
                    />
                </div>
              </div> */}
            {/* <div className="col-md-3 d-flex align-items-center">
              <button className="admin__btn admin__btnSearch" onClick={handleFilters}>
                <img src="../../../static/IMAGENES/Icon/SVG/buscar-icon.svg" />
                Buscar
              </button>
            </div> */}
          </div>
          <TableClients setSelecteClient={setSelecteClient} clients={clients} />
          <BtnExportClients clients={clients} />
        </div>
      </div>
    </div>
  );
};
