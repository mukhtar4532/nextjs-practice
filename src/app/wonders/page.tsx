import Link from "next/link";
import wonderImages from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className=" text-center text-3xl font-bold my-4">
        7 Wonders of the World
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        {wonderImages.map(({ id, src, name }) => (
          <Link key={id} href={`wonders/${id}`}>
            <Image
              alt={name}
              src={src}
              className=" w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
