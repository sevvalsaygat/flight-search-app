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
  leftIcon?: React.FC;
  disabled?: boolean;
  placeholder?: string;
};

const DatePicker: React.FC<SelectPropTypes> = ({
  name,
  label,
  rules,
  defaultValue = null,
  className,
  variant,
  leftIcon: LeftIcon,
  disabled = false,
  placeholder,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="flex flex-row items-center gap-1 text-sm font-semibold leading-6 text-purple-900">
          {LeftIcon && <LeftIcon />}
          {label}
        </label>
      )}
      <div>
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
              disabled={disabled}
              className={cn(className, {
                "w-fit text-sm font-light text-purple-900 border border-gray-300 rounded-md p-2 mt-2 placeholder:text-sm placeholder:font-light placeholder:text-purple-100 focus:outline-none focus:ring-2 focus:ring-gray-350 focus:bg-white":
                  variant === "primary",
              })}
              placeholderText={placeholder}
            />
          )}
        />
      </div>
      {fieldError && (
        <div className="fixed mt-2 ml-1 text-rose-500 text-xs font-normal">
          {fieldError.message as string}
        </div>
      )}
    </React.Fragment>
  );
};

export default DatePicker;
