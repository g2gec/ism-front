import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchAdvance } from '../../../components/SearchAdvance/SearchAdvance';
import axios from '../../../axios';
import { uiShowBarLoading } from '../../../actions/ui';
import './Quote.css';

export const Quote = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [existMessage, setExistMessage] = useState(false);
  const [messageActive, setMessageActive] = useState(null);

  const handleGetMessage = async () => {
    const request = {
      user_id: user.id,
    };
    dispatch(uiShowBarLoading(true));
    let res = await axios.post('sellers/messages/show');
    if (res.data.msg === 'No existe registro asociado') {
      return;
    }
    dispatch(uiShowBarLoading(false));
    setMessageActive(res.data.data);
    setExistMessage(true);
  };

  useEffect(() => {
    handleGetMessage();
  }, []);
  return (
    <div>
      <div className="vendor__mainTitle">
        <h3>Cotización</h3>
      </div>
      <div className="vendor__mainPanel">
        <div className="vendor__panelHeader">
          <button className={'admin__btnHeaderActive'}>Inicio</button>
        </div>
        {messageActive && messageActive.status === '1' && (
          <div className="vendor__content p-4">
            <div
              className="vendor__messageMotivation"
              style={{
                backgroundImage: `url(${process.env.REACT_APP_BASE}/uploads/messages-motivationals/${messageActive.id}/${messageActive.url_image})`,
                backgroundPosition: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p>{messageActive.message}</p>
            </div>
          </div>
        )}

        <div className="vendor__content p-4">
          <SearchAdvance />
        </div>
      </div>
    </div>
  );
};
