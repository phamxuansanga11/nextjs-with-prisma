"use client";

import React, { ReactNode } from "react";

interface AuthFormProps {
  formLabel: ReactNode;
  onSubmitForm: () => void;
  children: ReactNode;
}

const AuthForm = (props: AuthFormProps) => {
  const { formLabel, onSubmitForm, children } = props;

  return (
    <div className="h-screen bg-gradient-to-r from-sky-500 via-sky-200 to-sky-500 flex justify-center items-center">
      <div className="p-4 bg-white rounded-md w-[60%] m-auto h-fit">
        <h3 className="font-medium text-center mb-4">{formLabel}</h3>
        <form action={onSubmitForm}>{children}</form>
      </div>
    </div>
  );
};

export default AuthForm;
