import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ name, stock, image, onClick }) => {
  var stocklevel;
  if (stock >= 35) {
    stocklevel = "high";
  } else if (stock >= 20) {
    stocklevel = "medium";
  } else {
    stocklevel = "low";
  }
  return (
    <Link className="productCard" to={onClick}>
      <img src={image} alt={name} />
      <div className="productData">
        <p className="productName">{name}</p>
        <p className="productStock">
          Stock: <span className={stocklevel}>{stock}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
