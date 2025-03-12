import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Review ${params.reviewId} Product ${params.productId}`,
  };
};

const ReviewDetails = ({ params }: Props) => {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        review of {params.reviewId} for the product {params.productId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
