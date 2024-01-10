import { NextRequest, NextResponse } from "next/server";

import { airports } from "@api/mock";
import { ListResponseType, AirportType, ErrorResponseType } from "@api";

export async function GET(req: NextRequest) {
  try {
    return NextResponse.json<ListResponseType<AirportType>>({
      data: airports as AirportType[],
    });
  } catch (error) {
    return NextResponse.json<ErrorResponseType>(
      {
        message: "Something goes wrong while getting airports",
      },
      {
        status: 500,
      }
    );
  }
}
