import React from "react";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1>Details about Product {params.productId}</h1>
    </div>
  );
};

export default ProductDetails;
