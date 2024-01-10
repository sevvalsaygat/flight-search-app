"use client";

import { Home as HomeContainer } from "@app/containers";
import { useFlightStore } from "@app/stores";

export default function Home() {
  const isFirstlySearched = useFlightStore((state) => state.isFirstlySearched);

  return (
    <div>
      <HomeContainer.FlightSearchForm />
      {isFirstlySearched ? (
        <HomeContainer.FlightList />
      ) : (
        <HomeContainer.CampaignSection />
      )}
    </div>
  );
}
