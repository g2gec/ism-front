import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { PromotionCard } from "../../../components/Promotions/PromotionsCard/PromotionCard";
import "./Promotions.css";

import promotions from "../../../helpers/jsons/promotions.json";

import imgTest from "../../../assets/images/bogota.jpg";

export const Promotions = () => {
  const [promotions, setPromotions] = useState([]);

  const getPromotions = async () => {
    let res = await axios.get("admin/promotions");
    const { data } = res;
    setPromotions(data);
  };

  useEffect(() => {
    getPromotions();
  }, []);

  return (
    <div className="promotions py-4">
      <div className="container">
        <div className="promotions__head mb-4">
          <h2>Promociones</h2>
        </div>
        <div className="promotions__content">
          <div className="promotions__cards">
            {promotions.length > 0 ? (
              promotions.map((e) => <PromotionCard data={e} key={e.id} />)
            ) : (
              <p className="text-white">No hay promociones registradas</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
