import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { FlightType, ListFlightsResponse } from "@api";

type UseFlightStoreType = {
  isFirstlySearched: boolean;
  isOneWay: boolean;
  flights: ListFlightsResponse;
  setFlights: (flights: ListFlightsResponse) => void;
  setIsOneWay: (value: boolean) => void;
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
