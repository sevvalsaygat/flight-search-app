import { useQuery } from "@tanstack/react-query";
import type { UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { ListResponseType, AirportType, ErrorResponseType } from "@api";

export default function useGetAirports(
  options?: UseQueryOptions<
    ListResponseType<AirportType>,
    AxiosError<ErrorResponseType>
  >
) {
  const axiosInstance = useAxios();

  return useQuery({
    queryKey: ["useGetAirports"],
    queryFn: () =>
      axiosInstance
        .get<ListResponseType<AirportType>>("api/airports")
        .then((response) => response.data),
    ...options,
  });
}
