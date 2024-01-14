import { NextRequest, NextResponse } from "next/server";

import dayjs from "dayjs";

import { flights } from "@api/mock";
import { FlightType, ErrorResponseType, ListFlightsResponse } from "@api";

// type SortByType = "departure" | "return" | "flight" | "price" | null;

const SORT_BY_OPTIONS = ["departure", "return", "flight", "price"];

export async function POST(req: NextRequest) {
  try {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2500);
    });

    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber > 7) {
      throw new Error();
    }

    const body = await req.json();
    const from = body.from;
    const to = body.to;
    const departureDate = body.departure;
    const returnDate = body.return;
    const sortBy = body.sortBy;
    let filteredDepartureFlights = flights.filter(
      (f) =>
        f.from.refCode === from &&
        f.to.refCode === to &&
        dayjs(departureDate).format("DD/MM/YYYY") ===
          dayjs(f.departure).format("DD/MM/YYYY")
    );
    let filteredReturnFlights = flights.filter(
      (f) =>
        f.from.refCode === to &&
        f.to.refCode === from &&
        dayjs(returnDate).format("DD/MM/YYYY") ===
          dayjs(f.departure).format("DD/MM/YYYY")
    );

    if (sortBy && SORT_BY_OPTIONS.includes(sortBy)) {
      if (sortBy === "departure") {
        filteredDepartureFlights = filteredDepartureFlights.sort((a, b) => {
          const aDep = new Date(a.departure);
          const bDep = new Date(b.departure);
          return aDep.getTime() - bDep.getTime();
        });
      }

      if (sortBy === "return") {
        filteredReturnFlights = filteredReturnFlights.sort((a, b) => {
          const aDep = new Date(a.departure);
          const bDep = new Date(b.departure);
          return aDep.getTime() - bDep.getTime();
        });
      }

      if (sortBy === "price") {
        filteredReturnFlights = filteredReturnFlights.sort((a, b) => {
          return a.price - b.price;
        });
        filteredDepartureFlights = filteredDepartureFlights.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sortBy === "flight") {
        filteredReturnFlights = filteredReturnFlights.sort((a, b) => {
          const aDep = a.duration.hour * 60 + a.duration.minute;
          const bDep = b.duration.hour * 60 + b.duration.minute;
          return aDep - bDep;
        });
      }
    }

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
