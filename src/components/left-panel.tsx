import ProfileBio from "./profile-skills/profile-bio";
import ProfilePic from "./profile-skills/profile-pic";
import SkillList from "./profile-skills/skill-list";

export default function LeftPanel() {
  return (
    <div className="left-panel border rounded-md sticky top-[60px]">
      <ProfilePic />
      <ProfileBio />
      <SkillList skills={[]} />
    </div>
  );
}
