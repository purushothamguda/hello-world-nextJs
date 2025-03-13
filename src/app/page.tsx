import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: "orange",
          justifyContent: "flex-start",
        }}
      >
        <Link href="/blog" style={{ marginLeft: "1rem" }}>
          Blog
        </Link>
        <Link href="/products" style={{ marginLeft: "1rem" }}>
          Products
        </Link>
      </div>
      <h1>Welcome Home!</h1>
    </div>
  );
};

export default Home;
