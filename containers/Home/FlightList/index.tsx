"use client";

import React, { Fragment, useEffect, useState } from "react";

import { Menu, Transition } from "@headlessui/react";

import { useFlightStore } from "@app/stores";
import { Home } from "@app/containers";
import { api } from "@app/hooks";
import { Icons } from "@app/components";

type FlightListPropTypes = {};

const FlightList: React.FC<FlightListPropTypes> = () => {
  const flights = useFlightStore((state) => state.flights);
  const isOneWay = useFlightStore((state) => state.isOneWay);
  const setFlights = useFlightStore((state) => state.setFlights);
  const searchFormValue = useFlightStore((state) => state.searchFormValue);

  const [sortBy, setSortBy] = useState<
    "departure" | "return" | "flight" | "price" | null
  >(null);

  const { mutate, isPending } = api.useGetFlights({
    onSuccess: (data) => {
      setFlights(data);
    },
    onError: (error) => {
      setFlights({
        departureFlights: [],
        returnFlights: [],
      });
      // TODO: show error message
    },
  });

  useEffect(() => {
    if (!sortBy || !mutate || !searchFormValue || isOneWay === undefined) {
      return;
    }

    mutate({
      sortBy,
      from: searchFormValue.from.value,
      to: searchFormValue.to.value,
      departure: searchFormValue.departure,
      ...(isOneWay
        ? {}
        : {
            return: searchFormValue.return,
          }),
    });
  }, [sortBy, mutate, searchFormValue, isOneWay]);

  console.log({ isPending });

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-1/2 gap-6">
        <div className="flex flex-col items-end">
          <Menu as="div" className="relative inline-block text-left mt-9">
            <div>
              <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-light text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                <Icons.SvgFilters className="w-5 h-5 text-white mr-1" />
                {sortBy ? `Sorted By ${sortBy}` : "Sort By"}
                <Icons.SvgBottomArrow className="w-3 h-3 text-white ml-3" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setSortBy("departure")}
                        className={`${
                          active
                            ? "bg-rose-100 text-purple-900"
                            : "text-purple-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Departure Time
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setSortBy("return")}
                        className={`${
                          active
                            ? "bg-rose-100 text-purple-900"
                            : "text-purple-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Return Time
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setSortBy("flight")}
                        className={`${
                          active
                            ? "bg-rose-100 text-purple-900"
                            : "text-purple-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Flight Length
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setSortBy("price")}
                        className={`${
                          active
                            ? "bg-rose-100 text-purple-900"
                            : "text-purple-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        Price
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="flex flex-col items-center mb-14">
          <div className="flex flex-row">
            <Home.FlightListTable flights={flights.departureFlights} />
            {!isOneWay && (
              <Home.FlightListTable flights={flights.returnFlights} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightList;
