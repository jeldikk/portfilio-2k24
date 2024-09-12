import {
  cookiesClient,
  getAuthenticatedUser,
  runWithAmplifyServerContext,
} from "@/utils/amplify.server";
import { getUrl } from "aws-amplify/storage/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = NextResponse.next();
  const authDetails = await getAuthenticatedUser();
  const record = await cookiesClient.models.resumeUploads.get(
    {
      id: process.env.UPLOADED_RESUME_RECORD_ID as string,
    },
    { authMode: authDetails.isAuthenticated ? "userPool" : "identityPool" }
  );
  const filePath = record.data?.filePath as string;
  const urlDetails = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const downloadUrl = await getUrl(contextSpec, {
          path: filePath,
          options: {
            validateObjectExistence: true,
            expiresIn: 5 * 60,
          },
        });
        return downloadUrl;
      } catch (err) {
        return NextResponse.json({
          message: err,
        });
      }
    },
  });

  return NextResponse.json(urlDetails);
}

export async function PATCH(request: Request) {
  const body = await request.json(); // {uploadedFile: string}
  const { data, errors } = await cookiesClient.models.resumeUploads.get({
    id: process.env.UPLOADED_RESUME_RECORD_ID as string,
  });
  if (errors) {
    return Response.json(
      { errors },
      {
        status: 500,
      }
    );
  } else {
    let record;
    if (data) {
      record = await cookiesClient.models.resumeUploads.update({
        id: process.env.UPLOADED_RESUME_RECORD_ID as string,
        filePath: body.fileKey,
      });
    } else {
      record = await cookiesClient.models.resumeUploads.create({
        id: process.env.UPLOADED_RESUME_RECORD_ID as string,
        name: "resume",
        description: "description of resume file uploaded",
        filePath: body.fileKey,
      });
    }
    return Response.json({
      success: true,
      data: record.data,
    });
  }
}
