import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  const { itemInfo } = props;
  return (
    <div className="card">
      <div
        style={{ backgroundImage: "url(" + itemInfo.image + ")" }}
        className="item-card-header"
      ></div>
      <div className="item-card-body">
        <div className="card-title">{itemInfo.name}</div>
        <div className="card-text">{itemInfo.description}</div>
        <div className="card-footer">
          <div className="card-price">{itemInfo.price + " $"}</div>
          <Link to={`/product/${itemInfo._id}`} className="card-button">
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}
