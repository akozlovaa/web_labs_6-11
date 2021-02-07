import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./CardList.css";
import LoadingBox from "../loadingBox/LoadingBox";
import MessageBox from "../messageBox/MessageBox";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";

export default function CardList({ maxCardNumber }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const qty = window.location.search.split("=")[1];
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  

  return (
    <>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <div className="card-list">
          {(qty ? (qty === 'All' ? products : products.filter((x) => x.price === Number(qty))) : products) 
            .slice(0, maxCardNumber > 0 ? maxCardNumber : products.lengt)
            .map((item) => {
              return <Card key={item._id} itemInfo={item} />;
            })}
        </div>
      )}
    </>
  );
}
