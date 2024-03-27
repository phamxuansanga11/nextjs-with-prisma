"use client";

import { Button } from "antd";
import React from "react";
import { toast } from "react-toastify";

const ButtonSignOut = () => {
  return (
    <Button
      type="primary"
      onClick={async () => {
        toast.success("sssssssssssssssss");
      }}
    >
      Sign out
    </Button>
  );
};

export default ButtonSignOut;
