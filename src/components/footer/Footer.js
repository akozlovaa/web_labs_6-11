import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="link-list">
        <li className="footer-link">
          <Link to="/">Home</Link>
        </li>
        <li className="footer-link">
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className="footer-link">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </footer>
  );
}
