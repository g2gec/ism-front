import React from "react";
import "./PromotionCard.css";
import iconCart from "../../../assets/images/icons/carrito-icon.svg";

export const PromotionCard = ({ data }) => {
  return (
    <div
      className="promotionCard"
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BASE}uploads/promotions/${data.id}/${data.url_file})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="promotionCard__content">
        <div className="promotionCard__contentWrap">
          <div className="promotionCard__contentCard">
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </div>
          <button className="btn__gold mt-3">
            <img src={iconCart} />
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};
