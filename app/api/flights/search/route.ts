import { NextRequest, NextResponse } from "next/server";

import { flights } from "@api/mock";
import { ListResponseType, FlightType, ErrorResponseType } from "@api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const from = body.from;
    const to = body.to;
    const departureDate = body.departure;
    const returnDate = body.return;
    const filteredFlights = flights.filter(
      (f) => f.from.refCode === from && f.to.refCode === to
    );
    return NextResponse.json<ListResponseType<FlightType>>({
      data: filteredFlights as FlightType[],
    });
  } catch (error) {
    return NextResponse.json<ErrorResponseType>(
      {
        message: "Something goes wrong while getting flights",
      },
      {
        status: 500,
      }
    );
  }
}
