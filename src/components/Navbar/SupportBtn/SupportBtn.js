import React, { useState } from 'react';
import { WeHelpYou } from '../../UI/WeHelpYou/WeHelpYou';

export const SupportBtn = () => {
  const [showChat, setShowChat] = useState(false);

  const handleShowChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div>
      <div className="supportBtn" onClick={handleShowChat}>
        <img src="../../../static/IMAGENES/Icon/SVG/asistencia-icon.svg" />
        <span>Soporte</span>
      </div>
      {showChat && <WeHelpYou />}
    </div>
  );
};
