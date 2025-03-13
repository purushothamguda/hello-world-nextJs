import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "First Blog",
  },
};

const FirstBlog = () => {
  return <div>First Blog Post</div>;
};

export default FirstBlog;
