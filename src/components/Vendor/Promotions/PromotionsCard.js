import React from "react";
import "./PromotionsCard.css";
import iconCart from "../../../assets/images/icons/carrito-icon.svg";

export const PromotionsCard = ({ data }) => {
  return (
    <div
      className="cardPromotion"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BASE}uploads/promotions/${data.id}/${data.url_file})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="cardPromotion__title">{data.title}</h4>

      <div className="cardPromotion__contentInfo">
        <div className="cardPromotion__info">
          <h6 className="cardPromotion__infoTitle">Detalle información</h6>
          <p className="cardPromotion__infoText">{data.description}</p>
        </div>
        <div className="cardPromotion__btnDetails">
          <button>
            <img src={iconCart} />
            Vender
          </button>
        </div>
      </div>
    </div>
  );
};
