"use client";

import React, { useId } from "react";

import ReactSelect, { components } from "react-select";
import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

import { Icons } from "@app/components";

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
  leftIcon?: React.FC;
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
  leftIcon: LeftIcon,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const instanceId = useId();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="flex flex-row gap-2 items-center text-sm font-semibold leading-6 text-purple-900">
          {LeftIcon && <LeftIcon />}
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
              instanceId={instanceId}
              options={options}
              isMulti={isMulti}
              isSearchable={isSearchable}
              isClearable={isClearable}
              placeholder={
                <div className="text-sm font-light text-purple-100">
                  {placeholder}
                </div>
              }
              className={className}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              components={{
                Option: (props) => (
                  <components.Option {...props}>
                    <div className="flex flex-row items-center justify-between text-sm font-light text-purple-900 px-2">
                      <div>{props.data.label}</div>
                      <div className="w-4 h-4">
                        <Icons.SvgAirport />
                      </div>
                    </div>
                  </components.Option>
                ),
              }}
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

export default Select;
