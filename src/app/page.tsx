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
        <Link href="/blog" style={{ margin: "0px 1rem" }}>
          Blog
        </Link>
        <Link href="/products" style={{ margin: "0px 1rem" }}>
          Products
        </Link>
        <Link
          href="/articles/breaking-news-123?lang=en"
          style={{ margin: "0px 1rem" }}
        >
          Read in English
        </Link>
        <Link
          href="/articles/breaking-news-123?lang=fr"
          style={{ margin: "0px 1rem" }}
        >
          Read in French
        </Link>
      </div>
      <h1>Welcome Home!</h1>
    </div>
  );
};

export default Home;
