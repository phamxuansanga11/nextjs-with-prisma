"use server";

import { auth } from "@/auth";
import React from "react";

const DashboardPage = async () => {
  const session = await auth();

  return (
    <div className="h-screen w-screen">
      <div>DashboardPage</div>
      <div>{JSON.stringify(session)}</div>
    </div>
  );
};

export default DashboardPage;
