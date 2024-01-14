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

  const flightIsExist = flights.length > 0;

  return (
    <div>
      {!flightIsExist && (
        <div className="flex flex-col mx-auto items-center justify-center">
          <div className="flex flex-row w-full px-9 gap-28 mx-5 mr-2 py-7 items-center justify-center border border-rose-200 cursor-pointer shadow-sm rounded-md">
            <div className="flex flex-col gap-2 items-center justify-center">
              <Icons.RotaNotFound className="w-8 h-8 text-red-800" />
              <div className="flex flex-row items-center gap-3 text-sm font-light text-purple-900">
                No airplane found that matches the criteria you are looking for.
                Please try again with more suitable criteria.
              </div>
            </div>
          </div>
        </div>
      )}
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
