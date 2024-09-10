import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      <div className="container mx-auto lg:w-4/5 flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3">
          <LeftPanel />
        </div>
        <div className="md:w-2/3">
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
