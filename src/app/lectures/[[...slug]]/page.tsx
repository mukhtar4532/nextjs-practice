export default async function Lectures({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length == 1) {
    return <h1>Lecture 1</h1>;
  } else if (slug?.length == 2) {
    return <h1>Lecture 2</h1>;
  }
  return <h1>Lectures</h1>;
}
