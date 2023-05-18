import { NextResponse } from "next/server";
import data from "../data.json";

export async function GET(req: Request, res: Response) {
  const dummyUserId = 1;

  const filteredData = data.data.filter(
    (item) => item.user_id === dummyUserId && item.type === "old_costs"
  );

  return NextResponse.json({ status: "success", data: filteredData });
}
