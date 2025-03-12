import React from "react";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string[] }; // ✅ Ensure `slug` is always a defined array
}

const Docs = ({ params }: PageProps) => {
  if (!params?.slug) return notFound(); // ✅ Ensure valid params

  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
};

export default Docs;
