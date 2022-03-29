import React from 'react';
import visa from '../../../assets/images2/tdc/visa.png';
import americanExpress from '../../../assets/images2/tdc/american_express.png';
import masterCard from '../../../assets/images2/tdc/mastercard.png';
import dinnersClub from '../../../assets/images2/tdc/dinners.png';
import maestro from '../../../assets/images2/tdc/maestro.png';

export const ShowCreditCards = ({ creditCards = [], className }) => {
  const handleShowCard = (card) => {
    if (card === 'visa') {
      return <img src={visa} alt={card} width={45} height={30} className="mr-2" />;
    }
    if (card === 'maestro') {
      return <img src={maestro} alt={card} width={45} height={30} className="mr-2" />;
    }
    if (card === 'mastercard') {
      return <img src={masterCard} alt={card} width={45} height={30} className="mr-2" />;
    }
    if (card === 'american_express') {
      return <img src={americanExpress} alt={card} width={45} height={30} className="mr-2" />;
    }
    if (card === 'diners_club') {
      return <img src={dinnersClub} alt={card} width={45} height={30} className="mr-2" />;
    }
  };

  return (
    <div className={className}>
      {creditCards.map((e) => (
        <>{handleShowCard(e)}</>
      ))}
    </div>
  );
};
