import data from "../data.json";

import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  //   console.log(data);
  return NextResponse.json(data);
}
