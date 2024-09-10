"use client";
import { Button } from "flowbite-react";
import { FaDownload } from "react-icons/fa";

export default function ProfileBio() {
  const handleDownloadResume = async () => {
    console.log("handle Download Resume");
  };
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
        <div className="controls flex justify-center">
          <Button
            size="xs"
            outline
            gradientDuoTone="purpleToPink"
            onClick={handleDownloadResume}
          >
            <FaDownload className="mr-2 h-3 w-3" />
            Download Resume
          </Button>
        </div>
        <div className="bio text-center">
          <p></p>
        </div>
      </div>
    </div>
  );
}
