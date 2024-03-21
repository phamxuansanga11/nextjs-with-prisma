"use client";

import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const LoginPage = () => {
  const [dataSubmit, setDataSubmit] = useState({});

  return (
    <div>
      LoginPage
      <form action="">
        <div className="mb-4">
          <label htmlFor="">User Name</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="mb-4">
          <label htmlFor="">Password</label>
          <input type="text" id="password" name="password" />
        </div>
        <ButtonSubmit />
      </form>
    </div>
  );
};

const ButtonSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      Sign in button
    </button>
  );
};

export default LoginPage;
