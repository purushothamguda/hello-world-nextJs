"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OrderProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };

  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#012169",
          color: "#FFF",
          padding: "0px 2rem",
          margin: "2rem 0px",
        }}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderProduct;
