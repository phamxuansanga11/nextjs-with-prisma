"use client";

import { LoadingOutlined } from "@ant-design/icons";
import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ButtonPrimaryProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}

const ButtonPrimary = (props: ButtonPrimaryProps) => {
  const { pending } = useFormStatus();

  const { children, type, ...rest } = props;
  return (
    <button
      {...rest}
      disabled={pending}
      type={type}
      className="min-w-[117px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {pending && <LoadingOutlined className="mr-2" />}
      {children}
    </button>
  );
};

export default ButtonPrimary;
