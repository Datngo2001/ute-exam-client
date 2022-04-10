import React from "react";
import "./Card.css";

import { useHistory } from "react-router-dom";
const Card = ({src,text}) => {
  return (
    <div className="card__custom ">
      <div className="card__content">
        <div className="card__img">
          <img src={src} alt="" />
        </div>
        <div className="card__text">
            <p className="text-start pt-3 fw-bold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
