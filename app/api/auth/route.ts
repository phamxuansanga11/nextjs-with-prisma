import { NextRequest } from "next/server";

export async function POST(request: Request) {
  // const cookieStore = cookies()
  // const token = cookieStore.get('token')
  const res = await request.json();
  console.log("request from server:", res);

  //   return new Response("alo",
  //  {
  //     status: 200,
  //     message: "Call API successfully!",
  //     headers: { "Set-Cookie": `sessionToken=${res.sessionToken}` },
  //   }
  //   );
  return new Response(
    JSON.stringify({
      message: "Call API successfully!",
      headers: { "Set-Cookie": `sessionToken=${res.sessionToken}` },
    }),
    {
      status: 200,
      headers: {
        "Set-Cookie": `sessionToken=${res.sessionToken}; Path=/; HttpOnly`,
      },
    }
  );
}
