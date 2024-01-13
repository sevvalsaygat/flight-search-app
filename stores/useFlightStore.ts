import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { FlightType, ListFlightsResponse } from "@api";

type SearchFormType = {
  from: {
    value: string;
  };
  to: {
    value: string;
  };
  departure: string;
  return?: string;
};

type UseFlightStoreType = {
  isFirstlySearched: boolean;
  isOneWay: boolean;
  flights: ListFlightsResponse;
  searchFormValue: SearchFormType;
  setFlights: (flights: ListFlightsResponse) => void;
  setIsOneWay: (value: boolean) => void;
  setSearchFormValue: (value: SearchFormType) => void;
};

const useFlightStore = create<UseFlightStoreType>()(
  devtools(
    persist(
      (set) => ({
        isFirstlySearched: false,
        isOneWay: true,
        flights: {
          departureFlights: [],
          returnFlights: [],
        },
        searchFormValue: {
          from: {
            value: "",
          },
          to: {
            value: "",
          },
          departure: "",
          return: "",
        },
        setSearchFormValue: (value: SearchFormType) => {
          set({
            searchFormValue: value,
          });
        },
        setFlights: (flights: ListFlightsResponse) => {
          set({
            flights,

            isFirstlySearched: true,
          });
        },
        setIsOneWay: (value: boolean) => {
          set({
            isOneWay: value,
          });
        },
      }),
      {
        skipHydration: true,
        name: "flight-store",
      }
    )
  )
);

export default useFlightStore;
