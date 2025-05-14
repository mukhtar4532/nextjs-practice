import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const reqHeader = new Headers(request.headers)
  // console.log(reqHeader.get('abc'))

  const reqHeader = await headers();
  console.log(reqHeader.get("abc"));

  return new Response("<h2> Hello next.js route handlers </h2> ", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
