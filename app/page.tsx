"use client";

import { Home as HomeContainer } from "@app/containers";
import { useFlightStore } from "@app/stores";
import { Footer } from "@app/components";

export default function Home() {
  const isFirstlySearched = useFlightStore((state) => state.isFirstlySearched);

  return (
    <div className="min-h-screen">
      <HomeContainer.FlightSearchForm />
      {isFirstlySearched ? (
        <HomeContainer.FlightList />
      ) : (
        <HomeContainer.CampaignSection />
      )}
      <Footer />
    </div>
  );
}
