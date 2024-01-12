"use client";

import React from "react";

import { FormProvider, useForm } from "react-hook-form";

import { Form, Icons } from "@app/components";
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
    <div className="search-bar-bg max-h-[546px]">
      <div className="flex flex-row search-bar-label items-center justify-center mt-44 text-2xl font-medium text-white">
        Elevate Your Air Travel Experience: Find the Best Deals with Flight
        Search!
      </div>
      <div className="flex flex-col items-center mx-44 my-20">
        <div className="flex flex-row gap-0.5">
          <div className="flex flex-row gap-1 items-center px-3 py-2 bg-stone-200 rounded-t-lg cursor-pointer text-sm font-semibold text-purple-900">
            <Icons.SvgAirplane className="w-4 h-4" />
            Flight
          </div>
          <div className="flex flex-row gap-1 items-center px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-t-lg cursor-pointer text-sm font-normal text-purple-600 hover:text-purple-900">
            <Icons.SvgHotel className="w-4 h-4" />
            Hotel
          </div>
          <div className="flex flex-row gap-1 items-center px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-t-lg cursor-pointer text-sm font-normal text-purple-600 hover:text-purple-900">
            <Icons.SvgCar className="w-4 h-4" />
            Rent a Car
          </div>
          <div className="flex flex-row gap-1 items-center px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-t-lg cursor-pointer text-sm font-normal text-purple-600 hover:text-purple-900">
            <Icons.SvgTransfer className="w-4 h-4" />
            Transfer
          </div>
        </div>
        <div className="flex flex-col bg-stone-200 rounded-md p-10">
          <div className="flex flex-row gap-4">
            <div className="flex flex-row items-center gap-1 text-sm font-medium text-purple-900">
              One Way
              <input type="checkbox" aria-label="Roundtrip"></input>
            </div>
            <div className="flex flex-row items-center gap-1 text-sm font-medium text-purple-900">
              Roundtrip
              <input type="checkbox" aria-label="Roundtrip"></input>
            </div>
          </div>
          <div className="flex items-center mt-5 gap-5">
            <FormProvider {...useFormMethods}>
              <div className="flex flex-row items-center gap-1">
                <div className="flex flex-col">
                  <Form.Select
                    leftIcon={Icons.SvgAirplaneTakeOff}
                    label="From"
                    options={airportOptions}
                    name="from"
                    placeholder="Departure point"
                    isSearchable
                    isClearable
                    className="w-52"
                  />
                </div>
                <Icons.SvgExchange className="flex w-5 h-5 text-slate-800 hover:text-slate-500 mt-7 cursor-pointer" />
                <div className="flex flex-col">
                  <Form.Select
                    leftIcon={Icons.SvgAirplaneLanding}
                    label="To"
                    options={airportOptions}
                    name="to"
                    placeholder="Point of Destination"
                    isSearchable
                    isClearable
                    className="w-52"
                  />
                </div>
                <div className="flex flex-col">
                  <Form.DatePicker
                    leftIcon={Icons.SvgCalendar}
                    label="Departure Date"
                    name="departure"
                    className="flex flex-col"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col">
                  <Form.DatePicker
                    leftIcon={Icons.SvgCalendar}
                    label="Return Date"
                    name="return"
                    className="flex flex-col"
                    variant="primary"
                  />
                </div>
              </div>
              <button
                onClick={handleSubmit(onClickSearch)}
                className="flex px-4 py-2 w-fit h-fit bg-purple-700 hover:bg-purple-900 cursor-pointer text-white rounded-md mt-7 text-sm font-light"
              >
                Search
              </button>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
