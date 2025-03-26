"use client";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Errow loading for Product");
  }

  return (
    <>
      {children}
      <h2>Features Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
