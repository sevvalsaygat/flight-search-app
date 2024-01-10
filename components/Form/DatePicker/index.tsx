/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";
import ReactDatePicker from "react-datepicker";

type SelectPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  defaultValue?: string;
  className?: string;
  variant?: "primary";
};

const DatePicker: React.FC<SelectPropTypes> = ({
  name,
  label,
  rules,
  defaultValue = null,
  className,
  variant,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
      )}
      <div
        className={cn({
          "mt-2": !!label,
        })}
      >
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <ReactDatePicker
              selected={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              className={cn(className, {
                "w-full h-1/2 mb-4 bg-zinc-200 border border-gray-400 rounded-3 p-3 placeholder:text-sm font-light placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-350 focus:bg-white text-sm":
                  variant === "primary",
              })}
            />
          )}
        />
      </div>
      {fieldError && (
        <div className="mt-2 text-red-500">{fieldError.message as string}</div>
      )}
    </React.Fragment>
  );
};

export default DatePicker;
