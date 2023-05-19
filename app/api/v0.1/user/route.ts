import { NextRequest, NextResponse } from "next/server";
import userData from "./data.json";

export async function POST(req: NextRequest) {
  const reqData = await req.json();
  console.log("reqData: ", reqData);

  // use bcrypt to hash the password

  // check if user exists in the db
  const userExists = userData.data.some(
    (user) => user.email === reqData.email || user.username === reqData.username
  );
  console.log(userExists);

  // if user exists respond with error code
  if (userExists)
    return new Response(JSON.stringify({ message: "user exists" }), {
      status: 400,
    });

  // if user doesn't exist respond with success
  return new Response("", { status: 200 });
}
