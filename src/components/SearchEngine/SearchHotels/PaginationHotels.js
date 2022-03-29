import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../../actions/searchEngine';

export const PaginationHotels = () => {
  const dispatch = useDispatch();
  const { hotels } = useSelector((state) => state.searchEngine);

  const handleNextPage = () => {
    let currentPage = hotels.current_page;
    dispatch(getHotels(currentPage + 1));
  };
  const handlePrevPage = () => {
    let currentPage = hotels.current_page;
    dispatch(getHotels(currentPage - 1));
  };
  return (
    <>
      {hotels && (
        <div className="searchHotels__pagination">
          <p>
            {hotels.prev_page_url && (
              <button className="mr-2" onClick={handlePrevPage}>
                <i class="fas fa-chevron-left"></i>
              </button>
            )}
            Pagina ({hotels?.current_page}){' '}
            {hotels.next_page_url && (
              <button onClick={handleNextPage} className="ml-2">
                <i class="fas fa-chevron-right"></i>
              </button>
            )}
          </p>
        </div>
      )}
    </>
  );
};
