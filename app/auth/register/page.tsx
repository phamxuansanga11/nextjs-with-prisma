"use client";

import { createUser } from "@/actions/register";
import AuthForm from "@/src/components/AuthForm";
import ButtonPrimary from "@/src/components/AuthForm/components/ButtonPrimary";
import FormField from "@/src/components/AuthForm/components/FormField";
import { CreateUserData } from "@/types/user";
import { Tag } from "antd";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Status = "error" | "success";

interface FormStatus {
  status: Status;
  message: string;
}

const RegisterPage = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserData>({
    defaultValues: {
      email: "",
      fullName: "",
    },
  });

  const handleCreateUser: SubmitHandler<CreateUserData> = async (data) => {
    const result = await createUser(data);
    if (result.success) {
      setFormStatus({
        status: "success",
        message: result.success,
      });
    }
    if (result.error) {
      setFormStatus({
        status: "error",
        message: result.error,
      });
    }
  };

  return (
    <AuthForm
      formLabel={"🔐 Đăng ký tài khoản"}
      children={
        <>
          <div className="mb-5">
            <Controller
              control={control}
              name="email"
              rules={{
                required: {
                  value: true,
                  message: "Email không được để trống.",
                },
              }}
              render={({ field: { ref, onChange, value } }) => (
                <FormField
                  inputRef={ref}
                  inputId="email"
                  label="Email"
                  value={value}
                  onChange={(event) => onChange(event)}
                  inputPlaceholder="example@gmail.com"
                />
              )}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <Controller
              control={control}
              name="fullName"
              rules={{
                required: {
                  value: true,
                  message: "Họ và tên không được để trống.",
                },
              }}
              render={({ field: { ref, onChange, value } }) => (
                <FormField
                  inputRef={ref}
                  inputId="fullName"
                  label="Họ và tên"
                  value={value}
                  onChange={(event) => onChange(event)}
                  inputPlaceholder="sang pham"
                />
              )}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <ButtonPrimary type="submit">Đăng ký</ButtonPrimary>
          {formStatus?.message && (
            <div className="mt-4">
              <Tag
                color={formStatus?.status == "success" ? "success" : "red"}
                className="px-10 py-2 text-[12px] font-medium"
              >
                {formStatus.message.toUpperCase()}
              </Tag>
            </div>
          )}
        </>
      }
      onSubmitForm={handleSubmit((data) => handleCreateUser(data))}
    />
  );
};

export default RegisterPage;
