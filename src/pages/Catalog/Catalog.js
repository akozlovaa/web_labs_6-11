import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardList from "../../components/cardList/CardList";
import "./Catalog.css";

export default function Catalog() {
  const [price, setPrice] = useState("All");
  const history = useHistory();

  useEffect(()=> {
    const url = `/catalog?price=${price}`;
    history.push(url);
  }, [price, history])
  return (
    <div>
      <div className="catalog-header">
        <div className="catalog-filter">
          <div className="filter-header">Sort by Price</div>
          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="catalog-filter-list"
          >
            <option value="All">All</option>
            <option value="900">900</option>
            <option value="1000">1000</option>
          </select>
        </div>
      </div>
      <CardList />
    </div>
  );
}
