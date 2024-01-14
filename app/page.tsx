"use client";

import { Home as HomeContainer } from "@app/containers";
import { useFlightStore } from "@app/stores";
import { Layout } from "@app/components";

export default function Home() {
  const isFirstlySearched = useFlightStore((state) => state.isFirstlySearched);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Layout.Header />
      <HomeContainer.FlightSearchForm />
      {isFirstlySearched ? (
        <HomeContainer.FlightList />
      ) : (
        <HomeContainer.CampaignSection />
      )}
      <Layout.Footer />
    </div>
  );
}
