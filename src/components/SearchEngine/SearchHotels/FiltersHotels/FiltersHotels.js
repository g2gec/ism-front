import React, { useState, useEffect } from 'react';
import { ButtonFilterHotels } from './ButtonFilterHotels';
import './FiltersHotels.css';
import countriesData from '../../../../helpers/jsons/countries.json';

const optionsCategory = [
  { value: 1, label: '1 Estrella' },
  { value: 2, label: '2 Estrellas' },
  { value: 3, label: '3 Estrellas' },
  { value: 4, label: '4 Estrellas' },
  { value: 5, label: '5 Estrellas' },
];

export const FiltersHotels = ({ viewFiltersMovil }) => {
  const [optionCountries, setOptionCountries] = useState([]);

  useEffect(() => {
    const countries = [];
    countriesData.countries.forEach((element) => {
      const obj = { value: element.code, label: element.name_es };
      countries.push(obj);
    });
    setOptionCountries(countries);
  }, []);
  return (
    <div className={viewFiltersMovil ? 'searchHotels__filterContainer searchEngine__viewFiltersMovil' : 'searchHotels__filterContainer'}>
      <h4>Filtra tu busqueda</h4>
      <ul className="filtersHotels__buttons">
        <ButtonFilterHotels name="País" type="select" options={optionCountries} inputName="country_code" />
        <ButtonFilterHotels name="Ciudad" type="search" inputName="city" />
        <ButtonFilterHotels name="Nombre del hotel" type="search" inputName="name" />
        <ButtonFilterHotels name="Categoria" type="select" options={optionsCategory} inputName="stars" />
      </ul>
    </div>
  );
};
