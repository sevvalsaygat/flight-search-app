"use client";

import React from "react";
import Image from "next/image";

import { FlightType } from "@api";

type FlightListTablePropTypes = {
  flights: FlightType[];
};

const FlightListTable: React.FC<FlightListTablePropTypes> = ({ flights }) => {
  return (
    <div>
      {flights.map((flight, index) => {
        return (
          <div
            key={index}
            className="flex flex-col mx-auto items-center justify-center gap-5"
          >
            <div className="flex flex-row gap-5 border-b-2">
              <div className="flex flex-col">
                <div>
                  <Image
                    src={flight.company.logo}
                    alt={flight.company.name}
                    width={25}
                    height={25}
                  />
                </div>
                <div>{flight.company.name}</div>
                <div>{flight.code}</div>
                <div>{flight.class}</div>
                <div>{flight.baggage}</div>
              </div>
              <div className="flex flex-row gap-3">
                <div>{flight.from.refCode}</div>
                <div className="flex flex-row gap-2">
                  <div>{flight.duration.hour}h</div>
                  <div>{flight.duration.minute}min.</div>
                </div>
                <div>{flight.to.refCode}</div>
              </div>
              <div className="flex flex-row justify-center">
                <div>{flight.price}</div>
                <button>Select</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlightListTable;
