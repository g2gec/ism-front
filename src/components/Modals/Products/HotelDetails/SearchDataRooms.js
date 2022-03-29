import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { toast, Slide } from 'react-toastify';
import { SearchAddChilds } from './SearchAddChilds';
import { getHotelRooms } from '../../../../actions/searchEngine';

const now = moment();
const end = moment().add(1, 'days');

const initEvent = {
  start: now.toDate(),
  end: end.toDate(),
};

export const SearchDataRooms = () => {
  const dispatch = useDispatch();
  const { hotelSelected, hotelChildSelect } = useSelector((state) => state.searchEngine);

  const [formValues, setFormValues] = useState(initEvent);

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(end.toDate());

  const [adults, setAdults] = useState(1);
  const [activeAddChild, setActiveAddChildgister] = useState(false);

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };
  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleCountBtns = (type) => {
    if (type === 'add') {
      if (adults === 6) {
        toast('Máximo 6 adultos', {
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
      setAdults(adults + 1);
    } else {
      if (adults === 1) {
        return;
      }
      setAdults(adults - 1);
    }
  };

  const handleChildsConfirms = (data) => {
    let result = data.filter((e) => {
      return e.state === true;
    });
    return result.length;
  };

  const handleGetAgesChildren = (data) => {
    let result = data.map((a) => a.value);
    result = result.filter((el) => el != null);
    result = result.filter((el) => el !== '');
    result = result.map(Number);
    return result;
  };

  const handleSearch = () => {
    const request = {
      endpoint: '/search/hp/',
      data: {
        checkin: moment(formValues.start).format('YYYY-MM-DD'),
        checkout: moment(formValues.end).format('YYYY-MM-DD'),
        residency: null,
        language: 'es',
        guests: [
          {
            adults: adults,
            children: handleGetAgesChildren(hotelChildSelect),
          },
        ],
        id: hotelSelected.id,
        currency: null,
      },
    };
    dispatch(getHotelRooms(request));
  };

  return (
    <div className="modalProducts__searchRooms my-4">
      <span className="mr-4">Buscar disponiblidad</span>
      <div className="modalProducts__searchRoomsForm">
        <div className="modalProducts__searchRoomsBtns mr-3">
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            minDate={now.toDate()}
            calendarIcon={false}
            disableClock={true}
            showTimeSelect
            format="dd/MM/yyyy"
            className="input__date"
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
          />
          <span>checkIn</span>
        </div>
        <div className="modalProducts__searchRoomsBtns mr-3">
          <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
            minDate={dateStart}
            calendarIcon={false}
            disableClock={true}
            showTimeSelect
            format="dd/MM/yyyy"
            className="main__inputDate"
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
          />
          <span>checkOut</span>
        </div>
        <div className="modalProducts__searchRoomsBtns mr-3">
          <div className="modalProducts__searchRoomsInput">
            <button onClick={() => handleCountBtns('substrac')}> - </button>
            <input type="type" value={adults} />
            <button onClick={() => handleCountBtns('add')}> + </button>
          </div>
          <span>Adultos</span>
        </div>
        <div className="modalProducts__searchRoomsBtns mr-3">
          <button className="registerAgeChildren__btns" onClick={() => setActiveAddChildgister(!activeAddChild)}>
            <i className="fas fa-baby mr-2"></i>
            Menores ({handleChildsConfirms(hotelChildSelect)})
          </button>
          <span>Menores</span>
          <SearchAddChilds activeAddChild={activeAddChild} />
        </div>
        <button className="btn__gold modalProducts__btnSearch" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
};
