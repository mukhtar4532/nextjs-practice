import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const reqHeader = new Headers(request.headers)
  // console.log(reqHeader.get('abc'))

  const reqHeader = await headers();
  console.log(reqHeader.get("abc"));

  // const userCookie = request.cookies.get("test");
  // console.log(userCookie);

  const userCookie = await cookies();
  console.log(userCookie.get("test"));
  return new Response("<h2> Hello next.js route handlers </h2> ", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "test = 12345678",
    },
  });
}
