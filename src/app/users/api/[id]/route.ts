import { users } from "@/data/users";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userName = searchParams.get("username");
  const filteredUser = userName
    ? users.find((item) => item.username == userName)
    : users;
  return Response.json(filteredUser);
}

// export async function GET(
//   request: Request,
//   { params }: { params: Promise<{ id: string }> }
// ) {
//   const { id } = await params;
//   const user = users.find((item) => item.id == Number(id));
//   return Response.json(user);
// }

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userRequest = await request.json();
  const userIndex = users.findIndex((item) => item.id == Number(id));
  users[userIndex]["name"] = userRequest.name;
  return Response.json(users[userIndex]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const userIndex = users.findIndex((item) => item.id == Number(id));
  if (userIndex > 0) {
    users.splice(userIndex, 1);
  }
  return Response.json({ message: "User deleted" });
}
