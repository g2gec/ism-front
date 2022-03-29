import React from 'react';
import { useSelector } from 'react-redux';
import { ItemSearchRooms } from './ItemSearchRooms';

export const SearchRooms = () => {
  const { hotelRoomsFound } = useSelector((state) => state.searchEngine);
  return (
    <div className="modalProductDetails__infoContent mb-3">
      {hotelRoomsFound.map((e) => (
        <ItemSearchRooms data={e} />
      ))}
    </div>
  );
};
