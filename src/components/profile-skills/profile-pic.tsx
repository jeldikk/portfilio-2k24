import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="profile-pic h-[200px] grid place-content-center">
      <Image
        className="rounded-full border-4 border-sky-500 sepia blur-sm"
        alt="profile picture"
        src={"/images/profile-pic.jpg"}
        height={200}
        width={200}
      />
    </div>
  );
}
