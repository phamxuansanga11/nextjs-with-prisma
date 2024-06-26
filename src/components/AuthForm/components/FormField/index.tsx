"use client";

import React from "react";
import { RefCallBack } from "react-hook-form";

interface FormFieldProps {
  label: string;
  inputId: string;
  inputPlaceholder?: string;
  disabled?: boolean;
  inputType?: React.HTMLInputTypeAttribute | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  inputRef?: RefCallBack;
}

const FormField = (props: FormFieldProps) => {
  const {
    inputId,
    label,
    inputType,
    onChange,
    value,
    inputPlaceholder,
    disabled = false,
    inputRef = undefined,
  } = props;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        disabled={disabled}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={inputPlaceholder || ""}
        onChange={onChange}
        value={value}
        ref={inputRef}
      />
    </div>
  );
};

export default FormField;
