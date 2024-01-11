import { useMutation } from "@tanstack/react-query";
import type { MutateOptions } from "@tanstack/react-query";

import type { AxiosError } from "axios";

import { useAxios } from "@app/hooks";
import { ListResponseType, FlightType, ErrorResponseType } from "@api";

type UseGetFlightsPropTypes = {
  from: string;
  to: string;
  departure: string;
  return: string;
};

export default function useGetFlights(
  props: MutateOptions<
    ListResponseType<FlightType>,
    AxiosError<ErrorResponseType>,
    UseGetFlightsPropTypes
  >
) {
  const axiosInstance = useAxios();

  return useMutation({
    mutationKey: ["useGetFlights"],
    mutationFn: (payload: UseGetFlightsPropTypes) =>
      axiosInstance
        .post<ListResponseType<FlightType>>("api/flights/search", payload)
        .then((response) => response.data),
    ...props,
  });
}
