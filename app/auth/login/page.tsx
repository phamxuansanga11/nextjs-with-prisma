"use client";

import { login } from "@/actions/login";
import { PATH_NAME } from "@/routes";
import AuthForm from "@/src/components/AuthForm";
import ButtonPrimary from "@/src/components/AuthForm/components/ButtonPrimary";
import FormField from "@/src/components/AuthForm/components/FormField";
import { UserData } from "@/types/user";
import { Tag } from "antd";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Status = "error" | "success";

interface FormStatus {
  status: Status;
  message: string;
}

const LoginPage = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin: SubmitHandler<UserData> = async (data) => {
    console.log({ data });

    const result: any = await login(data);

    if (result && result.success) {
      reset();
      setFormStatus({
        status: "success",
        message: result.success,
      });
    }
    if (result && result.error) {
      setFormStatus({
        status: "error",
        message: result.error,
      });
    }
  };

  return (
    <AuthForm
      formLabel={"🔐 Đăng nhập"}
      redirectLabel={"Bạn chưa có tài khoản? Đăng ký"}
      redirectLink={PATH_NAME.REGISTER}
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
              name="password"
              rules={{
                required: {
                  value: true,
                  message: "Mật khẩu không được để trống.",
                },
              }}
              render={({ field: { ref, onChange, value } }) => (
                <FormField
                  inputRef={ref}
                  inputId="password"
                  label="Mật khẩu"
                  value={value}
                  onChange={(event) => onChange(event)}
                  inputPlaceholder="******"
                  inputType="password"
                />
              )}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <ButtonPrimary type="submit">Đăng nhập</ButtonPrimary>
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
      onSubmitForm={handleSubmit((data) => handleLogin(data))}
    />
  );
};

export default LoginPage;
