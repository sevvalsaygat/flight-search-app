"use client";

import React from "react";

import { useFlightStore } from "@app/stores";

type FlightListPropTypes = {};

const FlightList: React.FC<FlightListPropTypes> = () => {
  const flights = useFlightStore((state) => state.flights);

  return (
    <div>
      {flights.map((flight, index) => {
        return (
          <div key={index} className="flex flex-row">
            <div>{flight.from.name}</div>
            <div>{flight.to.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightList;
