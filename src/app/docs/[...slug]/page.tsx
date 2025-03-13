type Props = {
  params: Promise<{ slug: string[] }>;
};
const Docs = async ({ params }: Props) => {
  const { slug } = await params;
  if (slug.length === 2) {
    return (
      <h2>
        feature {slug[0]} and content {slug[1]}
      </h2>
    );
  } else if (slug.length === 1) {
    return <h2>feature {slug[0]}</h2>;
  }
  return (
    <div>
      <h2>Docs page</h2>
    </div>
  );
};

export default Docs;
