import React from "react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

// export const generateMetadata = async ({
//   params,
// }: Props): Promise<Metadata> => {
//   const title = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`iphone ${params.productId}`);
//     }, 100);
//   });
//   return {
//     title: `Product ${title}`,
//   };
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;
  return (
    <div>
      <h1>Details about Product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
