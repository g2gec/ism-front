import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../../actions/searchEngine';
import { CardSearchHotel } from '../CardSearchHotel/CardSearchHotel';
import { FiltersHotels } from './FiltersHotels/FiltersHotels';
import { PaginationHotels } from './PaginationHotels';
import './SearchHotels.css';

export const SearchHotels = () => {
  const dispatch = useDispatch();
  const { hotelsFilters, hotels } = useSelector((state) => state.searchEngine);
  const [viewFiltersMovil, setViewFiltersMovil] = useState(false);

  const handleShowFilters = () => {
    setViewFiltersMovil(!viewFiltersMovil);
  };

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch, hotelsFilters]);

  return (
    <div className="searchHotels mb-4">
      <div className="searchEngine__containerFilter">
        <div className="searchEngine__filter d-md-none" onClick={handleShowFilters}>
          <i class="fas fa-filter"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <FiltersHotels viewFiltersMovil={viewFiltersMovil} />
        </div>
        <div className="col-md-9">
          <PaginationHotels />

          {hotels ? (
            <div className="searchHotel__cardsContainer">
              {hotels?.data.map((e, index) => (
                <CardSearchHotel data={e} index={e.id} />
              ))}
            </div>
          ) : (
            <h4 className="text-white text-center my-auto">Filtra tu busqueda</h4>
          )}
        </div>
      </div>
    </div>
  );
};
