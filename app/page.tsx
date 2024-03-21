"use server";

import { db } from "@/lib/db";
import FormSubmitSetCookie from "@/src/components/FormSubmitSetCookie";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello this is Home Page</h1>
      <FormSubmitSetCookie />
    </main>
  );
}
