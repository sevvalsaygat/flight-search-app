import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { FlightType } from "@api";

type UseFlightStoreType = {
  isFirstlySearched: boolean;
  flights: FlightType[];
  setFlights: (flights: FlightType[]) => void;
};

const useFlightStore = create<UseFlightStoreType>()(
  devtools(
    persist(
      (set) => ({
        isFirstlySearched: false,
        flights: [],
        setFlights: (flights: FlightType[]) => {
          set({
            flights,
            isFirstlySearched: true,
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
