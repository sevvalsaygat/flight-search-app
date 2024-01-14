import React from "react";
import Image from "next/image";

import { Icons } from "@app/components";
import { FlightType } from "@api";
import { date } from "@app/lib";

type DefaultFlightItemPropTypes = {
  flight: FlightType;
};

const DefaultFlightItem: React.FC<DefaultFlightItemPropTypes> = ({
  flight,
}) => {
  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-5">
      <div className="flex flex-row w-full px-9 gap-28 mx-6 my-3 py-10 items-center justify-center border border-rose-200 cursor-pointer hover:bg-rose-100 shadow-sm rounded-md">
        <div className="flex flex-col items-center mr-5 gap-1">
          <div>
            <Image
              src={flight.company.logo}
              alt={flight.company.name}
              width={30}
              height={30}
            />
          </div>
          <div className="text-xs font-light text-purple-900">
            {flight.company.name}
          </div>

          <div className="text-xxs font-semibold text-purple-900">
            {flight.code}
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="text-xxs font-medium text-purple-900">
            {flight.class}
          </div>
          <div className="flex flex-row items-center justify-end text-xxs gap-0.5 font-medium text-purple-900">
            <Icons.SvgBaggage className="text-slate-700 w-5 h-5" />
            {flight.baggage} kg
          </div>
        </div>
        <div className="flex flex-row mr-5 justify-center items-center gap-3">
          <div className="flex flex-col items-center text-base font-semibold text-purple-900">
            <div className="text-xs">{date.getHourInfo(flight.departure)}</div>
            {flight.from.refCode}
          </div>
          <div className="flex flex-col items-center font-light text-xs">
            <div className="flex flex-row gap-2 text-purple-900">
              <div>{flight.duration.hour}h</div>
              <div>{flight.duration.minute}min.</div>
            </div>
            <Icons.SvgRightArrow className="w-9 h-9 text-gray-300" />
          </div>
          <div className="flex flex-col items-center text-base font-semibold text-purple-900">
            <div className="text-xs">{date.getHourInfo(flight.arrival)}</div>
            {flight.to.refCode}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-10">
          <div className="flex flex-row text-lg font-semibold text-purple-900 items-center justify-end">
            {flight.price}
            <Icons.SvgTurkishLira className="w-5 h-5" />
          </div>
          <button className="flex px-4 py-2 mb-8 w-fit h-fit bg-purple-700 hover:bg-purple-900 cursor-pointer text-white rounded-md mt-7 text-sm font-light">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultFlightItem;
