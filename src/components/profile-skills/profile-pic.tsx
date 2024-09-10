import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="profile-pic h-[200px] grid place-content-center w-full">
      <Image
        className="rounded-full border-4 border-purple-600"
        alt="profile picture"
        src={"/images/profile-pic.jpg"}
        height={200}
        width={200}
      />
    </div>
  );
}
