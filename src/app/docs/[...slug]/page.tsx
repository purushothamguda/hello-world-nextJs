import React from "react";

interface PageProps {
  params: { slug: string[] };
}

const Docs = ({ params }: PageProps) => {
  if (params.slug.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs Home page</h1>
    </div>
  );
};

export default Docs;
