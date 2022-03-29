import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchAdvance.css';

export const SearchAdvance = () => {
  const history = useHistory();

  const handleSearch = () => {
    history.push('/user/busqueda');
  };

  const [multi, setMulti] = useState(false);

  const handleMultiDestiny = (e) => {
    setMulti(e.target.checked);
  };

  return (
    <div className="searchAdvance">
      <h4>Servicios</h4>
      <p className="searchAdvance__searchText">Selecciona los servicios de interes</p>
      <div className="searchAdvance__searchService">
        <div className="searchAdvance__searchInputRadio">
          <input type="radio" name="services" />
          <label>Hoteles</label>
        </div>
        <div className="searchAdvance__searchInputRadio">
          <input type="radio" name="services" />
          <label>Tours</label>
        </div>
        <div className="searchAdvance__searchInputRadio">
          <input type="radio" name="services" />
          <label>Traslados</label>
        </div>
      </div>
      {multi && (
        <div className="searchAdvance__boxTitlePurple">
          <span>Tramo 1</span>
        </div>
      )}
      <div className="d-flex align-items-center justify-content-between w-100 mt-3 flex-wrap flex-md-nowrap">
        <div className="searchAdvance__searchDestiny">
          <h4>Destino</h4>
          <div className="searchAdvance__inputDestiny">
            <input type="text" placeholder="Elija su destino" />
          </div>
        </div>
        <div className="billboardLogged__searchDates">
          <h4>Fechas</h4>
          <div className="d-flex justify-content-between">
            <div className="searchAdvance__datesDestiny">
              <input type="date" placeholder="Ida" />
            </div>
            <div className="searchAdvance__datesDestiny">
              <input type="date" placeholder="Vuelta" />
            </div>
          </div>
        </div>
        <div className="searchAdvance__searchDestiny">
          <h4>Pasajeros y clase</h4>
          <div className="searchAdvance__inputDestiny">
            <input type="text" placeholder="Elija su destino" />
          </div>
        </div>
        <div className="searchAdvance__searchBtn">
          {!multi && (
            <button onClick={handleSearch} className="searchAdvance__searchDestinyBtn">
              Buscar
            </button>
          )}
        </div>
      </div>
      {multi && (
        <>
          <div className="searchAdvance__boxTitlePurple">
            <span>Tramo 2</span>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100 mt-3 flex-wrap flex-md-nowrap">
            <div className="searchAdvance__searchDestiny">
              <h4>Destino</h4>
              <div className="searchAdvance__inputDestiny">
                <input type="text" placeholder="Elija su destino" />
              </div>
            </div>
            <div className="billboardLogged__searchDates">
              <h4>Fechas</h4>
              <div className="d-flex justify-content-between">
                <div className="searchAdvance__datesDestiny">
                  <input type="date" placeholder="Ida" />
                </div>
                <div className="searchAdvance__datesDestiny">
                  <input type="date" placeholder="Vuelta" />
                </div>
              </div>
            </div>
            <div className="searchAdvance__searchDestiny">
              <h4>Pasajeros y clase</h4>
              <div className="searchAdvance__inputDestiny">
                <input type="text" placeholder="Elija su destino" />
              </div>
            </div>
            <div className="searchAdvance__searchBtn">
              <button onClick={handleSearch} className="searchAdvance__searchDestinyBtn">
                Buscar
              </button>
            </div>
          </div>
        </>
      )}
      <div className="searchAdvance__searchInputMulti">
        <input type="checkbox" name="services" onChange={handleMultiDestiny} id="checkMulti" />
        <label htmlFor="checkMulti">Multidestinos</label>
      </div>
    </div>
  );
};
