import React from 'react'

export const FormProvider = () => {
    return (
      <div className="formProvider">
        <h5 className="admin__titlePanel">Restel</h5>
        <div className="row">
          <div className="col-6">
            <div className="admin__inputSelect mb-2">
              <p>Servicios y porcentajes</p>
              <select>
                <option value="Seleccionar tipo de vendedor">
                  Seleccionar servicios
                </option>
              </select>
            </div>
            <div className="admin__inputText">
              <p>Telefono</p>
              <input type="text" placeholder="AV5673N" />
            </div>
            <div className="row">
              <div className="col-6">
                <div className="admin__inputText">
                  <p>País</p>
                  <input type="text" placeholder="Ingrese nombre del país" />
                </div>
              </div>
              <div className="col-6">
                <div className="admin__inputText">
                  <p>Telefono</p>
                  <input type="text" placeholder="09861255" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="admin__inputText">
              <p>Link pagina web</p>
              <input type="text" placeholder="AV5673N" />
            </div>
            <div className="admin__inputText">
              <p>Nombre contacto</p>
              <input type="text" placeholder="AV5673N" />
            </div>
            <div className="admin__inputSelect mb-2">
              <p>Estado general</p>
              <select>
                <option value="Seleccionar tipo de vendedor">
                  Seleccionar
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button className="admin__panelBtn">
            <img
              src="../../../static/IMAGENES/Icon/SVG/guardar.icon.svg"
              className="img-fluid"
            />
            Guardar
          </button>
        </div>
      </div>
    );
}
