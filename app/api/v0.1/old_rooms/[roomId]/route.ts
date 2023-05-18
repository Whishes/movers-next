// GET ALL
import { NextResponse } from "next/server";
import data from "../../data.json";

export async function GET(
  req: Request,
  { params: { roomId } }: { params: { roomId: string } }
) {
  const id = parseInt(roomId);

  // Check for user here
  const dummyUserId = 1;

  if (!roomId || typeof id !== "number" || !id) {
    throw new Error("invalid id");
  }

  const filteredData = data.data.filter(
    (item) =>
      item.user_id === dummyUserId &&
      item.type === "old_rooms" &&
      item.id === id
  );

  // console.log(filteredData);

  return NextResponse.json({ status: "success", data: filteredData });
}

// DELETE -> since all the data will probs be in the same collection so just needs an id to target
