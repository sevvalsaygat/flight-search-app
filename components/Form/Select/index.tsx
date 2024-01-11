"use client";

import React from "react";

import ReactSelect from "react-select";
import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type SelectPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  isClearable?: boolean;
  options: Array<{
    value: string;
    label: string;
    searchValue?: string;
  }>;
};

const Select: React.FC<SelectPropTypes> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue = "",
  className,
  isMulti = false,
  isSearchable = false,
  isClearable = false,
  options = [],
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
            <ReactSelect
              options={options}
              isMulti={isMulti}
              isSearchable={isSearchable}
              isClearable={isClearable}
              placeholder={placeholder}
              className={className}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
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

export default Select;
