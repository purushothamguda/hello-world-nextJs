const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length === 2) {
    return (
      <h2>
        feature {params.slug[0]} and content {params.slug[1]}
      </h2>
    );
  } else if (params.slug.length === 1) {
    return <h2>feature {params.slug[0]}</h2>;
  }
  return (
    <div>
      <h2>Docs page</h2>
    </div>
  );
};

export default Docs;
