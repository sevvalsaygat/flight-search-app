import { NextRequest, NextResponse } from "next/server";

import dayjs from "dayjs";

import { flights } from "@api/mock";
import { FlightType, ErrorResponseType, ListFlightsResponse } from "@api";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const from = body.from;
    const to = body.to;
    const departureDate = body.departure;
    const returnDate = body.return;
    const filteredDepartureFlights = flights.filter(
      (f) =>
        f.from.refCode === from &&
        f.to.refCode === to &&
        dayjs(departureDate).format("DD/MM/YYYY") ===
          dayjs(f.departure).format("DD/MM/YYYY")
    );
    const filteredReturnFlights = flights.filter(
      (f) =>
        f.from.refCode === to &&
        f.to.refCode === from &&
        dayjs(returnDate).format("DD/MM/YYYY") ===
          dayjs(f.departure).format("DD/MM/YYYY")
    );

    return NextResponse.json<ListFlightsResponse>({
      departureFlights: filteredDepartureFlights as FlightType[],
      returnFlights: filteredReturnFlights as FlightType[],
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
