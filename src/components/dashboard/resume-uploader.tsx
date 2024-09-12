"use client";
import { FileUploader } from "@aws-amplify/ui-react-storage";
import { Alert } from "flowbite-react";
import { useState } from "react";
import { useMutation } from "react-query";

type SuccessResponse = {
  status: string;
};

type ErrorResponse = {
  status: string;
};

export default function ResumeUploader() {
  const [uploadError, setUploadError] = useState<string | null>(null);
  const { mutate, isError, isLoading, isSuccess } = useMutation<
    SuccessResponse,
    ErrorResponse,
    { fileKey: string }
  >({
    mutationKey: "update-resume-record",
    mutationFn: async (data) => {
      //   return new Promise(() => {});
      const response = await fetch("/api/resume", {
        method: "PATCH",
        credentials: "include",
        body: JSON.stringify(data),
      });
      const json = await response.json();
      return json;
    },
    onSuccess: (data) => {},
  });

  const handleUploadError = (error: string, file: { key: string }) => {
    setUploadError(error);
  };

  const handleUploadSuccess = (file: { key?: string }) => {
    setUploadError("");
    mutate({ fileKey: file.key! });
  };

  return (
    <div className="resume-uploader">
      <h3 className="text-xl md:text-3xl py-2">Update Resume File</h3>
      <div className="text-center border border-dashed py-2 px-4">
        <FileUploader
          acceptedFileTypes={[".pdf"]}
          maxFileCount={1}
          maxFileSize={3 * 1024 * 1024}
          path="resumes/"
          autoUpload={false}
          onUploadError={handleUploadError}
          onUploadSuccess={handleUploadSuccess}
        />
        {isLoading && (
          <Alert color={"info"}>Updating the data record to sync changes</Alert>
        )}
        {isSuccess && <Alert color={"success"}>File has been updated</Alert>}
        {!!uploadError && (
          <Alert color={"failure"}>
            <span className="font-medium">Error! </span>
            {uploadError}
          </Alert>
        )}
      </div>
    </div>
  );
}
