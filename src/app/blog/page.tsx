import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

const Blog = () => {
  return (
    <div>
      <Link href="/" style={{ color: "red" }}>
        Home
      </Link>
      <h1>Blog</h1>
    </div>
  );
};

export default Blog;
