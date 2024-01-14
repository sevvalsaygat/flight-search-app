"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const ClientProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster closeButton position="top-right" />
      {children}
    </QueryClientProvider>
  );
};

export default ClientProviders;
