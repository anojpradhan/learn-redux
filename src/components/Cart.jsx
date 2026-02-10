import React from "react";
import items from "../products.json";
import { useSelector } from "react-redux";
const Cart = () => {
  const items = useSelector((state) => state);
  const total = items.cart.reduce((a, b) => a + b.price, 0);
  console.log(items);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.cart.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
