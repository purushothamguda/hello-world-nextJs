import { notFound } from "next/navigation";

const ReviewDetails = ({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) => {
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
