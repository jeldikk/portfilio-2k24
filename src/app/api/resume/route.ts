import {
  cookiesClient,
  runWithAmplifyServerContext,
} from "@/utils/amplify.server";
import { getUrl } from "aws-amplify/storage/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = NextResponse.next();
  const record = await cookiesClient.models.resumeUploads.get({
    id: process.env.UPLOADED_RESUME_RECORD_ID as string,
  });
  const filePath = record.data?.filePath as string;
  const urlDetails = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      const downloadUrl = await getUrl(contextSpec, {
        path: filePath,
      });
      // console.log({ downloadUrl });
      return downloadUrl;
    },
  });
  return NextResponse.json(urlDetails);
}

export async function PATCH(request: Request) {
  const body = await request.json(); // {uploadedFile: string}
  const { data, errors } = await cookiesClient.models.resumeUploads.get({
    id: process.env.UPLOADED_RESUME_RECORD_ID as string,
  });
  console.log({ data, errors });
  console.log({ cookies: cookies() });
  if (errors) {
    console.error({ errors });
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
      //   console.log({ createdRecord });
    }
    console.log({ record });
    return Response.json({
      success: true,
      data: record.data,
    });
  }
}
