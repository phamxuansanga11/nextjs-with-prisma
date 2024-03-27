import { auth, signOut } from "@/auth";
import React from "react";
const DashboardPage = async () => {
  const session = await auth();

  return (
    <div className="h-screen w-screen">
      <div>DashboardPage</div>
      <div>{JSON.stringify(session)}</div>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
};

export default DashboardPage;
