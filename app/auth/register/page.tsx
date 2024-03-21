"use client";

import AuthForm from "@/src/components/AuthForm";
import ButtonPrimary from "@/src/components/AuthForm/components/ButtonPrimary";
import FormField from "@/src/components/AuthForm/components/FormField";
import React from "react";

const RegisterPage = () => {
  return (
    <AuthForm
      formLabel={"🔐 Đăng ký tài khoản"}
      children={
        <>
          <FormField
            inputId="email"
            label="Email"
            onChange={() => ""}
            inputPlaceholder="example@gmail.com"
          />
          <FormField
            inputId="fullName"
            label="Họ và tên"
            onChange={() => ""}
            inputPlaceholder="sang pham"
          />
          <ButtonPrimary type="submit">Đăng ký</ButtonPrimary>
        </>
      }
      onSubmitForm={() => ""}
    />
  );
};

export default RegisterPage;
