import { fetchUserDetails } from "@/services/auth";

export async function GET() {
  try {
    const response = await fetchUserDetails();
    return Response.json(response);
  } catch (err: any) {
    return Response.json(
      {
        error: true,
        message: err.message,
      },
      { status: 401 }
    );
  }
}
