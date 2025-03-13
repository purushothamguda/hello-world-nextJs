import Link from "next/link";
import React from "react";

const ProductList = () => {
  const productListValues = [4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Link href="/" style={{ color: "red" }}>
        Home
      </Link>
      <h1>Products Page</h1>
      <h2>
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2>
        <Link href="/products/3">Product 3</Link>
      </h2>
      <h2>
        {productListValues.map((productId, index) => {
          return (
            <Link
              href={`/products/${productId}`}
              style={{ display: "flex", flexDirection: "column" }}
              replace
              key={index}
            >
              Product {productId}
            </Link>
          );
        })}
      </h2>
    </div>
  );
};

export default ProductList;
