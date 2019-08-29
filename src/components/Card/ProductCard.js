import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="container-fluid">
      <div className="row m-1 product-card">
        <div className="col-4 text-center">
          <img
            src={product.img}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "100%", maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col text-center">
          <p>{product.name}</p>
          <hr />
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-success btn-block">
                Add <FaCartPlus />
              </button>
            </div>
            <div className="col">
              <p style={{ color: "#116CB4" }}>${product.cost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
