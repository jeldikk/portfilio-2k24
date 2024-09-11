"use client";
import { Badge, Button } from "flowbite-react";
import { useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { useQuery } from "react-query";

export default function ProfileBio() {
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null);
  const {
    data: downloadUrl,
    error,
    isLoading,
    isError,
    refetch,
    isRefetching,
    isRefetchError,
    isSuccess,
  } = useQuery({
    queryKey: "resume-url",
    queryFn: async () => {
      const res = await fetch("/api/resume");
      const body = await res.json();
      return body;
    },
    onSuccess: (data) => {
      console.log("successuflly generated link and is called onSuccess");
      console.log({ data });
      downloadLinkRef.current?.click();
    },
    enabled: false,
  });
  const handleDownloadResume = async () => {
    console.log("handle Download Resume");
    refetch();
  };

  console.log({ downloadLinkRef });

  return (
    <div className="profile-bio w-100">
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="name text-center text-xl md:text-2xl font-bold tracking-wider">
          Jeldi Kamal Kumar
        </div>
        <div className="wishing text-center text-sm md:text-lg">
          Aspiring Cloud Native
          <br /> Fullstack Developer
        </div>
        <div className="controls flex justify-center gap-1">
          <Button
            size="xs"
            outline
            onClick={handleDownloadResume}
            isProcessing={isRefetching}
            gradientDuoTone="purpleToPink"
            processingLabel={"Downloading ..."}
          >
            {!isRefetching && <FaDownload className="mr-2 h-3 w-3" />}
            Download Resume
          </Button>
          <a
            ref={downloadLinkRef}
            className="hidden"
            href={downloadUrl && downloadUrl.url && downloadUrl.url.toString()}
            target="_blank"
            rel="noreferrer"
          ></a>
        </div>
      </div>
    </div>
  );
}
