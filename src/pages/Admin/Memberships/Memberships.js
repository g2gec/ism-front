import React, { useState, useEffect } from 'react';
import axios from '../../../axios';

import { MainClients } from '../../../components/Admin/Memberships/Clientes/MainClients/MainClients';
import { CreateMembership } from '../../../components/Admin/Memberships/CreateMembership';
import './Memberships.css';

export const Memberships = () => {
  const [panelMemberships, setPanelMemberships] = useState('list');
  const [panelStep, setPanelStep] = useState('memberships');
  const [memberships, setMemberships] = useState([]);
  const [selectedMembership, setSelectedMembership] = useState(null);

  const handleVieMemberships = (panel, data = null) => {
    if (panel === 'create') {
      setSelectedMembership(null);
    } else {
      setSelectedMembership(data);
    }
    setPanelMemberships(panel);
  };
  const handleViewStep = (step) => {
    setPanelStep(step);
  };

  const getMemberships = async () => {
    let res = await axios.get(`/memberships`);
    const { data } = res;
    setMemberships(data);
  };

  useEffect(() => {
    if (panelMemberships === 'list') {
      getMemberships();
    }
  }, [panelMemberships]);

  return (
    <div className="memberships">
      <div className="admin__mainTitle">
        <h3>Membresía</h3>
      </div>
      <div className="admin__mainPanel">
        <div className="admin__panelHeader">
          <button className={panelStep === 'memberships' && 'admin__btnHeaderActive'} onClick={() => handleViewStep('memberships')}>
            Membresias
          </button>
          <button className={panelStep === 'clients' && 'admin__btnHeaderActive'} onClick={() => handleViewStep('clients')}>
            Clientes
          </button>
        </div>

        {panelMemberships === 'create' && panelStep === 'memberships' && <CreateMembership handleVieMemberships={handleVieMemberships} selectedMembership={selectedMembership} />}
        {panelMemberships === 'edit' && panelStep === 'memberships' && <CreateMembership handleVieMemberships={handleVieMemberships} selectedMembership={selectedMembership} />}
        {panelStep === 'memberships' && (
          <div className="admin__panelContent">
            <div className="memberships__create">
              <img onClick={() => handleVieMemberships('create')} src="../../../static/IMAGENES/Icon/SVG/agregar-icon.svg" />
              <span onClick={() => handleVieMemberships('create', '')}>Crear nueva membresía</span>
            </div>
            <div className="memberships__list">
              {memberships.map((e) => (
                <div className="membershipCard mb-3" key={e.id}>
                  <div className="membershipCard__details">
                    <div className="membershipCard__img">
                      <img src={`${process.env.REACT_APP_BASE}/uploads/memberships/${e.id}/${e.file}`} className="img-fluid" />
                    </div>
                    <div className="flex-column">
                      <h4>{e.name}</h4>
                      <span onClick={() => handleVieMemberships('edit', e)}>Ver detalle</span>
                    </div>
                  </div>
                  <div className="membershipCard__check">
                    <img src="../../../static/IMAGENES/Icon/SVG/check-icon.svg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {panelStep === 'clients' && <MainClients />}
      </div>
    </div>
  );
};
