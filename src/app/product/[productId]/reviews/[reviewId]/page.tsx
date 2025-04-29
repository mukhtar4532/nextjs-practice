import { notFound } from "next/navigation";

export default async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (reviewId > "50") {
    notFound();
  }
  return (
    <h1>
      Product Id {productId} Review Id {reviewId}
    </h1>
  );
}
