export default async function News({
  params,
  searchParams,
}: {
  params: Promise<{ newsId: string }>;
  searchParams: Promise<{ cat: string; type: string }>;
}) {
  const { newsId } = await params;
  const { cat, type } = await searchParams;
  return (
    <h2>
      News {newsId} {cat} {type}
    </h2>
  );
}
