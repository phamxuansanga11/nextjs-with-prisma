import { auth, signOut } from "@/auth";
import PageContainer from "@/src/components/PageContainer";
import React from "react";
const DashboardPage = async () => {
  const session = await auth();

  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default DashboardPage;
