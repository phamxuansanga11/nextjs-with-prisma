"use client";

import React from "react";

const FormSubmitSetCookie = () => {
  const handleSetCookie = async () => {
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionToken: "my sessionToken from client",
        }),
      })
        .then((res) => res.json())
        .catch((err) => {
          throw err;
        });
      console.log({ res });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>FormSubmitSetCookie</div>
      <button
        onClick={() => handleSetCookie()}
        className="rounded-md px-2 py-1 bg-green-500 text-white"
      >
        Call API set cookie
      </button>
    </div>
  );
};

export default FormSubmitSetCookie;
