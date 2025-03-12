import React from "react";

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
