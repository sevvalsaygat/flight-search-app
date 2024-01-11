"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";

import { Form } from "@app/components";
import { api } from "@app/hooks";
import { useFlightStore } from "@app/stores";

type FlightSearchFormPropTypes = {};

type SearchFormType = {
  from: {
    value: string;
  };
  to: {
    value: string;
  };
  departure: string;
  return: string;
};

const FlightSearchForm: React.FC<FlightSearchFormPropTypes> = () => {
  const useFormMethods = useForm<SearchFormType>();
  const setFlights = useFlightStore((state) => state.setFlights);
  const { mutate } = api.useGetFlights({
    onSuccess: (data) => {
      setFlights(data.data);
    },
    onError: (error) => {
      setFlights([]);
      // TODO: show error message
    },
  });
  const { data } = api.useGetAirports();

  const { handleSubmit } = useFormMethods;
  const airportOptions =
    data?.data.map((airport) => ({
      value: airport.refCode,
      label: airport.name,
      searchValue: airport.name.toLocaleLowerCase(),
    })) || [];

  const onClickSearch = (formData: SearchFormType) => {
    mutate({
      from: formData.from.value,
      to: formData.to.value,
      departure: formData.departure,
      return: formData.return,
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <div className="flex flex-row gap-2 mt-28">
          <input
            type="checkbox"
            aria-label="Roundtrip"
            className="text-black"
          ></input>
        </div>
        <div className="flex flex-col mt-5 gap-7">
          <div className="flex flex-col">
            <FormProvider {...useFormMethods}>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <Form.Select
                    label="From"
                    options={airportOptions}
                    name="from"
                    placeholder="departure point"
                    isSearchable
                    isClearable
                  />
                </div>
                <div className="flex flex-col">
                  <Form.Select
                    label="To"
                    options={airportOptions}
                    name="to"
                    placeholder="departure point"
                    isSearchable
                    isClearable
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col">
                  <Form.DatePicker
                    label="Departure"
                    name="departure"
                    className="flex flex-col"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col">
                  <Form.DatePicker
                    label="Return"
                    name="return"
                    className="flex flex-col"
                    variant="primary"
                  />
                </div>
              </div>
            </FormProvider>
          </div>
          <button
            onClick={handleSubmit(onClickSearch)}
            className="flex py-3 px-5 w-fit h-fit bg-red-600 text-white rounded-full"
          >
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
