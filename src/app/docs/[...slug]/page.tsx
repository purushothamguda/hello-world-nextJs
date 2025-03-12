import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string[] }; // ✅ Ensure `slug` is always a valid array
}

export default function DocsPage({ params }: PageProps) {
  if (!params || !params.slug) return notFound(); // ✅ Ensures params exist

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
}
