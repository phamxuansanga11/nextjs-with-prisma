"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

interface AuthFormProps {
  formLabel: ReactNode;
  onSubmitForm: () => void;
  children: ReactNode;
  redirectLabel: string;
  redirectLink: string;
}

const AuthForm = (props: AuthFormProps) => {
  const { formLabel, onSubmitForm, children, redirectLabel, redirectLink } =
    props;

  return (
    <div className="h-screen bg-gradient-to-r from-sky-500 via-sky-200 to-sky-500 flex justify-center items-center">
      <div className="p-4 bg-white rounded-md w-[60%] m-auto h-fit">
        <h3 className="font-medium text-center mb-4">{formLabel}</h3>
        <form action={onSubmitForm}>{children}</form>
        <div className="mt-4 text-sm font-medium">
          <Link className="hover:underline" href={redirectLink}>
            {redirectLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
