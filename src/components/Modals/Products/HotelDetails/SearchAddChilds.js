import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSetChildSelected } from '../../../../actions/searchEngine';
import { toast, Slide } from 'react-toastify';

const obj = [
  {
    id: 1,
    value: null,
    state: false,
  },
  {
    id: 2,
    value: null,
    state: false,
  },
  {
    id: 3,
    value: null,
    state: false,
  },
  {
    id: 4,
    value: null,
    state: false,
  },
];

export const SearchAddChilds = ({ activeAddChild }) => {
  const { hotelChildSelect } = useSelector((state) => state.searchEngine);
  const dispatch = useDispatch();

  const handleAddChild = (id) => {
    let value = document.getElementById(`addChild${id}`).value;
    if (!value) {
      toast('Agregar edad del menor', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return;
    }
    if (value > 17) {
      document.getElementById(`addChild${id}`).value = '';
      toast('La edad debe ser menor a 17 años', {
        position: 'bottom-center',
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });
      return;
    }
    let newChilds = hotelChildSelect;
    newChilds.forEach((element) => {
      if (element.id === id) {
        element.value = value;
        element.state = true;
      }
    });
    dispatch(handleSetChildSelected(newChilds));
  };

  const handleDeleteChild = (id) => {
    document.getElementById(`addChild${id}`).value = '';
    let newChilds = hotelChildSelect;
    newChilds.forEach((element) => {
      if (element.id === id) {
        element.value = '';
        element.state = false;
      }
    });
    dispatch(handleSetChildSelected(newChilds));
  };
  return (
    <div className={`registerAgeChildren__section ${activeAddChild ? 'd-flex' : 'd-none'}`}>
      <div className="registerAgeChildren__sectionMain">
        <h6>Agregar menores de edad</h6>
        {hotelChildSelect.map((e) => (
          <>
            <div className="registerAgeChildren__sectionInput">
              <label>Menor {e.id}</label>
              <div className="d-flex align-items-center">
                <input id={`addChild${e.id}`} type="number" min="0" max="17" disabled={e.state} onKeyDown={false} />
                {!e.state ? (
                  <button onClick={() => handleAddChild(e.id)}>
                    <i className="fas fa-plus"></i>
                  </button>
                ) : (
                  <button onClick={() => handleDeleteChild(e.id)}>
                    <i class="fas fa-trash"></i>
                  </button>
                )}
              </div>
            </div>
            <hr
              style={{
                marginTop: '5px',
                marginBottom: '5px',
              }}
            ></hr>
          </>
        ))}
        <p className="registerAgeChildren__max">Máximo 4 menores</p>
      </div>
    </div>
  );
};
