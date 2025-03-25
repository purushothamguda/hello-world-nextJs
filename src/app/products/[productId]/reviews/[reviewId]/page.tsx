import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { reviewId, productId } = await params;
  return {
    title: `Review ${reviewId} Product ${productId}`,
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetails = async ({ params }: Props) => {
  const { reviewId, productId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Errow loading revew");
  }

  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        review of {reviewId} for the product {productId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
