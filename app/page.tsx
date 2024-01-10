"use client";

import { Form } from "@app/components";
import { FormProvider, useForm } from "react-hook-form";

export default function Home() {
  const useFormMethods = useForm();
  const { trigger, getValues, watch, getFieldState, setFocus } = useFormMethods;

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
                  <Form.Input
                    label="From"
                    name="Plane take off"
                    placeholder="departure point"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col">
                  <Form.Input
                    label="To"
                    name="destination"
                    placeholder="destination"
                    variant="primary"
                  />
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col">
                  <Form.DatePicker
                    label="Depart"
                    name="departure date"
                    className="flex flex-col"
                    variant="primary"
                  />
                </div>
                <div className="flex flex-col">
                  <Form.DatePicker
                    label="Return"
                    name="departure date"
                    className="flex flex-col"
                    variant="primary"
                  />
                </div>
              </div>
            </FormProvider>
          </div>
          <button className="flex py-3 px-5 w-fit h-fit bg-red-600 text-white rounded-full">
            Search Flights
          </button>
        </div>
      </div>
    </div>
  );
}
