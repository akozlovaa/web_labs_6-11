import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

export default function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="navbar">
      <div className="logo">MacBooks</div>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart">
            {cartItems.length > 0 && (
              <span className="cart-qty">{cartItems.length}</span>
            )}
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
