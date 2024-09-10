import ProfileBio from "./profile-skills/profile-bio";
import ProfilePic from "./profile-skills/profile-pic";
import SkillList from "./profile-skills/skill-list";

export default function LeftPanel() {
  return (
    <div className="left-panel border rounded-md md:sticky md:top-[60px]">
      <div className="flex flex-row py-4 px-2 md:flex-col">
        <div className="basis-[40%] md:w-full">
          <ProfilePic />
        </div>
        <div className="flex-grow md:flex-grow-0">
          <div className="w-full flex justify-center items-center h-full">
            <ProfileBio />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <SkillList skills={[]} />
      </div>
    </div>
  );
}
