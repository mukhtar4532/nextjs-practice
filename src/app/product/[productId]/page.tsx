import { Metadata } from "next";

type props = {
  params: Promise<{ productId: string }>;
};

// Define dynamic MetaData

export async function generateMetaData({ params }: props): Promise<Metadata> {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
    description: "Product Description",
  };
}

export default async function ProductId({ params }: props) {
  const productId = (await params).productId;
  return <h1>Product Details {productId}</h1>;
}
