import React, { useState, useEffect } from 'react';
import { CreateVendor } from '../../../components/Admin/Vendors/CreateVendor/CreateVendor';
import axios from '../../../axios';
import { CardVendor } from '../../../components/Admin/Vendors/CardVendor';
import { MainMotivationMessage } from '../../../components/Admin/Vendors/Motivations/MainMotivationMessage';

export const Vendors = () => {
  const [panelStep, setPanelStep] = useState('list');
  const [vendors, setVendors] = useState([]);
  const [vendorSelected, setVendorSelected] = useState(null);

  const handleGetVendors = async () => {
    let res = await axios.get('admin/sellers');
    setVendors(res.data);
  };

  const handleSelected = (data) => {
    setVendorSelected(data);
    setPanelStep('create');
  };

  useEffect(() => {
    if (panelStep === 'list') {
      handleGetVendors();
    }
  }, [panelStep]);

  const handleViewVendors = (view) => {
    setPanelStep(view);
  };

  const handleBtnRegister = (view) => {
    setVendorSelected(null);
    setPanelStep(view);
  };

  return (
    <div className="vendors">
      <div className="admin__mainTitle">
        <h3>Vendedores</h3>
      </div>
      <div className="admin__mainPanel">
        <div className="admin__panelHeader">
          <button className={panelStep === 'list' && 'admin__btnHeaderActive'} onClick={() => handleViewVendors('list')}>
            Lista vendedores
          </button>
          <button className={panelStep === 'messages' && 'admin__btnHeaderActive'} onClick={() => handleViewVendors('messages')}>
            Mensajes
          </button>
        </div>
        <div className="admin__panelContent">
          <div className="memberships__create">
            {panelStep === 'list' && (
              <>
                <img onClick={() => handleViewVendors('create')} src="../../../static/IMAGENES/Icon/SVG/agregar-icon.svg" />
                <span onClick={() => handleBtnRegister('create')}>Crear nuevo vendedor</span>
              </>
            )}
            {panelStep === 'create' && (
              <>
                <img className="ml-2 mr-1" onClick={() => handleViewVendors('list')} src="../../../static/IMAGENES/Icon/SVG/atras-icon.svg" />
                <span onClick={() => handleViewVendors('list')}>Regresar</span>
              </>
            )}
          </div>
          <div className="memberships__list">
            {panelStep === 'list' && vendors.map((e) => <CardVendor data={e} handleSelected={handleSelected} />)}
            {vendors.length === 0 && panelStep !== 'messages' && <p className="px-4">No hay vendedores registrados</p>}
          </div>
          {panelStep === 'create' && <CreateVendor vendorSelected={vendorSelected} setPanelStep={setPanelStep} />}
          {panelStep === 'messages' && <MainMotivationMessage />}
        </div>
      </div>
    </div>
  );
};
