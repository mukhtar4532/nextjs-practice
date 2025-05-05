"use client";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { use } from "react";

type props = {
  params: Promise<{ productId: string }>;
};

// Define dynamic MetaData

// export async function generateMetaData({ params }: props): Promise<Metadata> {
//   const productId = (await params).productId;
//   return {
//     title: `Product ${productId}`,
//     description: "Product Description",
//   };
// }

export default function ProductId({ params }: props) {
  const productId = use(params).productId;
  const router = useRouter();
  const handleBuyNow = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Product Details {productId}</h1>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}
