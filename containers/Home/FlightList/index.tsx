"use client";

import React from "react";
import Image from "next/image";

import { useFlightStore } from "@app/stores";
import { Home } from "@app/containers";

type FlightListPropTypes = {};

const FlightList: React.FC<FlightListPropTypes> = () => {
  const flights = useFlightStore((state) => state.flights);
  const isOneWay = useFlightStore((state) => state.isOneWay);

  return (
    <div className="flex flex-row">
      <Home.FlightListTable flights={flights.departureFlights} />
      {!isOneWay && <Home.FlightListTable flights={flights.returnFlights} />}
    </div>
  );
};

export default FlightList;
