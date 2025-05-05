import Link from "next/link";

export default function InterceptedI2() {
  return (
    <h2>
      I2 page Inercepted (.) <Link href={"/i1"}>I1</Link>
    </h2>
  );
}
