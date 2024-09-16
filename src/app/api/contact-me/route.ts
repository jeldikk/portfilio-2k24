import { cookiesClient } from "@/utils/amplify.server";
import { getAuthenticatedUser } from "@/utils/amplify.server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const authDetails = await getAuthenticatedUser();

    const { contact, message } = body;
    const { data, errors } = await cookiesClient.models.message.create(
      {
        contact,
        message,
      },
      { authMode: authDetails.isAuthenticated ? "userPool" : "identityPool" }
    );
    if (errors) {
      return Response.json({ errors }, { status: 400 });
    } else {
      return Response.json({ data });
    }
  } catch (err) {
    return new Response("Error occured", { status: 500 });
  }
}
