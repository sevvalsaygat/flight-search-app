"use client";

import React from "react";
import Image from "next/image";

import { FlightType } from "@api";
import { Icons } from "@app/components";
import { useFlightStore } from "@app/stores";

import DefaultFlightItem from "./DefaultFlightItem";
import MiniFlightItem from "./MiniFlightItem";

type FlightListTablePropTypes = {
  flights: FlightType[];
};

const FlightListTable: React.FC<FlightListTablePropTypes> = ({ flights }) => {
  const isOneWay = useFlightStore((state) => state.isOneWay);

  return (
    <div>
      {flights.map((flight, index) => {
        return isOneWay ? (
          <DefaultFlightItem flight={flight} />
        ) : (
          <MiniFlightItem flight={flight} />
        );
      })}
    </div>
  );
};

export default FlightListTable;
