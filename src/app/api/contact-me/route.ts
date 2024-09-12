import { cookiesClient } from "@/utils/amplify.server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { contact, message } = body;
  const { data, errors } = await cookiesClient.models.message.create({
    contact,
    message,
  });
  if (!errors) {
    return Response.json({ data });
  } else {
    return new Response("Error Occured", {
      status: 500,
    });
  }
}
